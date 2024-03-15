import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

function Porfessiondetail() {
  const { id } = useParams()
  const [data, setData] = useState({})

  const navigate = useNavigate()



console.log(data)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get(`http://localhost:3000/api/profession/getOne/${id}`, {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        })
        setData(response.data)
      } catch (error) {
        console.error('Error fetching profession detail:', error);
      }
    };

    fetchData()
  }, [id])



  const deleteProffesion = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3000/api/profession/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}` 

        }
      })
      navigate('/professions')
    } catch (error) {
      console.error('Error deleting profession:', error)
    }
  }



  
  return (
    <div>
      <h2>Profession Detail</h2>
      <ul>
        <li > <img src={data.imageUrl}></img> </li>
        <li>{data.name}</li>
        <li>{data.profession}</li>
        <li>{data.category}</li>
        
      </ul>
      <button onClick={deleteProffesion}>Delete</button>
    </div>
  );
}

export default Porfessiondetail;
