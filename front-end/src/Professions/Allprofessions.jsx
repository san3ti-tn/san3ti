import React ,{useState , useEffect} from 'react'
import Professions from './Professions.jsx'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Allprofessions() {
  const [data,setData]=useState([])
  console.log(data)
  const navigate = useNavigate()
 
  const getAll = async () => {
   try {
     const token = localStorage.getItem('token');
     const res = await axios.get("http://localhost:3000/api/profession/getAll", {
       headers: {
         Authorization: `Bearer ${token}`
       }
     })
     setData(res.data);
     
     
   } catch(error) {
     console.log(error);
   }
 }
 
 
 useEffect(()=>{
 getAll()
 },[])
 

 
  return (
    <div>
        {data.map((service)=>{
         return (
          <Professions service={service} />
         )   
        })}
    </div>
  )
}

export default Allprofessions