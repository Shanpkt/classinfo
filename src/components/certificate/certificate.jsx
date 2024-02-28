import React from 'react'
import certifi from "../../assets/White Blue Illustrtated Flower Internship Certificate.png"
import "./certificate.scss"
function Certificate() {
  return (
    <div className='certi_box'>
        <h4>Your Certificate Will Look Like This</h4>
        <img src={certifi} />
    </div>
  )
}

export default Certificate