import React, { useState, useEffect } from 'react'
import Professions from './Professions.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Allprofessions() {
  const [data, setData] = useState([])

  const [term, setterm] = useState("")

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
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAll()
  }, [])

  const searched = (term) => {
    return data.filter((service) => service.category.toLowerCase().indexOf(term.toLowerCase()) >= 0).map((service, index) => (
      <Professions service={service} key={index} />
    ))
  }


  return (

    <div>
      <center className='navigater d-flex' >
        <div>
          <div >
            <img style={{ width: '55px', height: '55px', borderRadius: '100%', overflow: 'hidden' }} 
            src="https://img.freepik.com/vecteurs-libre/lettre-coloree-creation-logo-degrade_474888-2309.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1710288000&semt=ais" alt="" />
          </div>
        </div>
        <div >
          <button onClick={() => { navigate('/create') }} className='creating btn btn-info'>create Profession</button>
          <input type="text" className="form-control w-25 d-inline" placeholder='search' onChange={(e) => setterm(e.target.value)} />
        </div>
      </center>
      <div className='grid-container'>
        {searched(term)}
      </div>
    </div>

  )
}

export default Allprofessions