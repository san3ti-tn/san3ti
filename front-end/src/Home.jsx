import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
 
 
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {

const [data,setData]=useState([])
console.log(data)
 const navigate = useNavigate()

 const getAll = async ()=>{
   try{
const {data}=  await axios("http://localhost:3000/api/profession/getAll")
console.log(data.token)
setData(data)
} catch(error){
console.log(error)
}
}
getAll()
useEffect(()=>{
getAll()
},[])

  return (
  
   <header>
      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Welcome to San3ti</h1>
              <h5 className='mb-4'>Where everything can happen in one click</h5>
              <MDBBtn
                className="m-2"
                tag="a"
                outline
                size="lg"
                rel="nofollow"
                target="_blank"
                onClick={()=>{navigate("/create")}}
              >
                Create a service 
              </MDBBtn>
              <MDBBtn
                className="m-2"
                tag="a"
                outline
                size="lg"
                target="_blank"
                onClick={()=>{getAll()}}
              >
                Buy a service 
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
    
  
    
      
    
  

  
