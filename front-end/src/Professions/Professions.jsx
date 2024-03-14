import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Professions({service}) {
    console.log(service)
const navigate = useNavigate()
  return (
    <MDBCard className='card-style'>
      <MDBCardImage className='profimage' src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{service.name}</MDBCardTitle>
        <MDBCardText>
        <MDBCardTitle>{service.profession}</MDBCardTitle>
        <MDBCardTitle>{service.category}</MDBCardTitle>
        </MDBCardText>
        <MDBBtn  onClick={()=>{navigate("/detail")}}  >Read More </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}

