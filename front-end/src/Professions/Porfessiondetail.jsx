import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function Porfessiondetail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [profession, setProfession] = useState("");
  const [vis, setVis] = useState(false);
  const [dummy, setdummy] = useState(false);

  const userId = localStorage.getItem("userId");
  const { state } = useLocation()
  const service = state
  const navigate = useNavigate();

  useEffect(() => {
    if (service.userId==userId) {
      setdummy(!dummy)
    }
    
 

   
   
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:3000/api/profession/getOne/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching profession detail:", error);
      }
    };


    fetchData();

  }, [id]);

  const handleVis = () => {
    setVis(!vis);
  };
  const update = async () => {
    if ((!name||!category||!profession)) {
     return alert('should fill inputs')   
    }
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      await axios.put(
        `http://localhost:3000/api/profession/update/${id}`,
        {
          name: name,
          category: category,
          profession: profession,
          userId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      fetchData()
      setVis(false);
    } catch (err) {
      console.log("Error updating profession:", err);
    }
    navigate("/professions");
  };

  const deleteProffesion = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3000/api/profession/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/professions");
    } catch (error) {
      console.error("Error deleting profession:", error);
    }
  };

  return (
   <center> <div className="detailed"> 
<div className="profession-detail-container">
  <h2 className="profession-detail-heading">Profession Detail</h2>
  <ul className="profession-detail-list">
    <li>
      <img  className="profession-image" src={data.imageUrl} alt="Profession" />
    </li>
    <li className="profession-detail-item">
      name : {data.name}{" "}
      {vis && (
        <input
          className="update-input"
          placeholder="update name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      )}
    </li>
    <li className="profession-detail-item">
      profession: {data.profession}{" "}
      {vis && (
        <input
          className="update-input"
          placeholder="update profession"
          value={profession}
          onChange={(e) => {
            setProfession(e.target.value);
          }}
        />
      )}
    </li>
    <li className="profession-detail-item">
      category : {data.category}{" "}
      {vis && (
        <input
          className="update-input"
          placeholder="update category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
      )}
    </li>
    {vis ? (
      <div>
        <button className="update-button"
          onClick={() => {
            update();
            
          }}
        >
          Update
        </button>
      </div>
    ) : dummy ? (
      <div>
        <button className="edit-button"
          onClick={() => {
            handleVis(true);
          }}
        >
          Edit
        </button>
        <button className="delete-button" onClick={deleteProffesion}>Delete</button>
      </div>
    ) : <div></div>}
  </ul>

  <div>
    <button className="back-button" onClick={() => { navigate('/professions') }}>Go back to all Professions</button>
  </div>
</div>
</div>
</center> )
}
export default Porfessiondetail;
