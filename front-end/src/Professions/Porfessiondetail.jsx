import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Porfessiondetail() {
  const { id } = useParams()
  const [data, setData] = useState({})
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

  return (
    <div>
      <h2>Profession Detail</h2>
      <ul>
        <li > <img src={data.imageUrl}></img> </li>
        <li>{data.name}</li>
        <li>{data.profession}</li>
        <li>{data.category}</li>
        
      </ul>
    </div>
  );
}

export default Porfessiondetail;
