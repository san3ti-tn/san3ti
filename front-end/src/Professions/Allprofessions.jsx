import React ,{useState , useEffect} from 'react'
import Professions from './Professions.jsx'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Allprofessions() {
  const [data,setData]=useState([])
  const [term,setterm]=useState("")

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
 const searched = (term) => {
  return data.filter((service) => service.category.toLowerCase().indexOf(term.toLowerCase()) >= 0).map((service, index) => (
    <center><Professions service={service} /></center>
  ))}

 
  return (<div>
    <center><input type="text" placeholder="write a title" onChange={(e) => setterm(e.target.value)} /> </center>
    <div className='grid-container'>
        {searched(term)}
    </div>
    </div>
  )
}

export default Allprofessions