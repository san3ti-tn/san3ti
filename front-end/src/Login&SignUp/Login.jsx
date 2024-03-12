import React ,{useState} from 'react';
import axios from "axios"
import { Link } from "react-router-dom"
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Login() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  
 const signin = (email,password)=>{
  axios.post("http://localhost:3000/api/users/signin",{
email:email,
password:password
  }).then((result)=>{
    console.log(result)
  }).catch((error)=>{
    console.log(error)
  })
 } 

  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <MDBInput  onChange={(e)=>{setEmail(e.target.value)}} wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput onChange={(e)=>{setPassword(e.target.value)}} wrapperClass='mb-4' label='Password' id='formControlLg1' type='password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            
          </div>

          <MDBBtn onClick={()=>{signin(email,password)}} className="mb-4 w-100" size="lg">Sign in</MDBBtn>
          <Link className="mb-4 w-100" size="lg" t
          to="/" > Sign up </Link>


          
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;