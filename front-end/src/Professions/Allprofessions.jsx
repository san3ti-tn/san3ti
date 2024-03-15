import React ,{useState , useEffect} from 'react'
import Professions from './Professions.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Allprofessions() {
  const [data,setData]=useState([])
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
    //need styling here
    <div>
      <div
      style={{"display": "flex",
      "justify-content": "center",
      "align-items:" :"center",
      }}>
      <button onClick={ ()=>{
        navigate("/create")
      }}> create</button>
      </div>
        {data.map((service)=>{
         return (
          <Professions service={service} />
         )   
        })}
    </div>
    
  )
}
export default Allprofessions