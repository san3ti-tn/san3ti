import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Porfessiondetail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [profession, setProfession] = useState("");
  const [vis, setVis] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
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
      );

      const response = await axios.get(
        `http://localhost:3000/api/profession/getOne/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data);

      setVis(false);
    } catch (err) {
      console.log("Error updating profession:", err);
    }
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
    <div>
      <h2>Profession Detail</h2>
      <ul>
        <li>
          <img src={data.imageUrl} alt="Profession" />
        </li>
        <li>
          name : {data.name}{" "}
          {vis && (
            <input
              placeholder="update name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          )}
        </li>
        <li>
          profession: {data.profession}{" "}
          {vis && (
            <input
              placeholder="update profession"
              value={profession}
              onChange={(e) => {
                setProfession(e.target.value);
              }}
            />
          )}
        </li>
        <li>
          category : {data.category}{" "}
          {vis && (
            <input
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
            <button
              onClick={() => {
                update();
                navigate("/professions");
              }}
            >
              Update
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                handleVis(true);
              }}
            >
              Edit
            </button>
          </div>
        )}
      </ul>
      <button onClick={deleteProffesion}>Delete</button>
    </div>
  );
}

export default Porfessiondetail;
