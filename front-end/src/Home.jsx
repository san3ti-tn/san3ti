import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
 
 
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {

 const navigate = useNavigate()
  return (
   <header>
      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUztsDP1zeKraHsstdinhf7hIJL5TIfxYFA&usqp=CAU')" }}
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
                onClick={()=>{
                 
                  navigate('/professions')
                }}
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
    
  
    
      
    
  

  
