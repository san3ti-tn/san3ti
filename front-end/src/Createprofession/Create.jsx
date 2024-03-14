import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';


function App() {

  const navigate =useNavigate()

   const [name,setName]=useState("") 
   const [category,setCategory]=useState("")
   const [file,setFile]=useState("")
   const [profession,setProfession]=useState("")

   
    
  return (
    <MDBContainer className='body' fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase"></h2>
              <p className="text-white-50 mb-5">Please provide your service information</p>

              <MDBInput onChange={(e)=>{setName(e.target.value)}} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='name' id='formControlLg' type='email' size="lg"/>
              <MDBInput onChange={(e)=>{setCategory(e.target.value)}} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='category' id='formControlLg' type='text' size="lg"/>
              <MDBInput  onChange={(e)=>{setFile(e.target.value)}} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white'  id='formControlLg' type='file' size="lg"/>
              <MDBInput onChange={(e)=>{setProfession(e.target.value)}} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='profession' id='formControlLg' type='text' size="lg"/>
             

              
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                Create Service 
              </MDBBtn>


             
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default App;