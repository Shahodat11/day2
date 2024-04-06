import React from 'react'
import  '../ourproducts/ourproducts.css'
import mainLogo from '../images/Frame 619 (4).svg'
import mainImg from '../images/Frame 616.svg'

function OurProducts() {
  return (
    <>
    <div className="container">
      <div className="nav-link5">
        <div className="nav7">
          <img src={mainLogo} alt="" />
        </div>
        <div className="nav8">
          <img src={mainImg} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default OurProducts