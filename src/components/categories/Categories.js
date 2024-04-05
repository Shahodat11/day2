import React from 'react'
import '../categories/categories.css'
import categories from '../images/Frame 623 (1).svg'
import { IoPhonePortraitOutline } from "react-icons/io5";

function Categories() {
  return (
    <>
    <div className="container">
      <div className="nav-link4">
        <div className="nav1">
          <img src={categories} alt="" />
          <h1>Browse By Category</h1>
        </div>
        <div className="nav2">
          <div className="nav5">
            <IoPhonePortraitOutline />
            <h5>Phones</h5>
          </div>
        </div>
      </div>    
    </div>
    </>
  )
}

export default Categories