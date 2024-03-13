import React, { useState } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
 // MDBCol,
  //MDBRow,
  MDBInput,
  MDBCheckbox,

}
  from 'mdb-react-ui-kit';

function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const signup = (password,email)=>{
    axios.post("http://localhost:3000/api/users/signup",{
password:password,
email:email
    }).then((result)=>{
      console.log(result)
    }).catch((error)=>{
      console.log(error)
    })
  }  


  
  return (
    <MDBContainer fluid>



      <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>
      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>

        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Sign up now</h2>
          <MDBInput onChange={(e) => { setEmail(e.target.value) }} wrapperClass='mb-4' label='Email' id='form1' type='email' />
          <MDBInput onChange={(e) => { setPassword(e.target.value) }} wrapperClass='mb-4' label='Password' id='form2' type='password' />
          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
          </div>
          <MDBBtn onClick={()=>{signup(password,email)}} className='w-100 mb-4' size='md'>sign up</MDBBtn>
          <Link to="/login" >Log in </Link>



        </MDBCardBody>

      </MDBCard>

    </MDBContainer>
  );
}

export default SignUp;