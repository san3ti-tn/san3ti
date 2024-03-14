import React from 'react'
import Professions from './Professions.jsx'

function Allprofessions() {
 const  dummydata =[{name:"amine" , category:"njara" , profession : "tala3 bebe" }]

 
  return (
    <div>
        {dummydata.map((service)=>{
         return (
          <Professions service={service} />
         )   
        })}
    </div>
  )
}

export default Allprofessions