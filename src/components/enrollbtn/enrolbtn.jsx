import React from 'react'
import "./enrolbtn.scss"
import { useNavigate } from 'react-router-dom'
function Enrolbtn() {

   const page=useNavigate()
  const handel=()=>{
    page('/form')
  }
  return (
  <div className='enroll_btn_box'><button onClick={handel} className='enroll_btn'>Enroll Now</button></div>  
  )
}

export default Enrolbtn