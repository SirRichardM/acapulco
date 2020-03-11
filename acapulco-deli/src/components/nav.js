import React from "react"
import {Link} from "react-router-dom"

function Nav() {
  
  return (
    <div className="navigation">
      <a href="#home">Home</a>
     <a href="#break">Breakfast</a> 
      <a>Salads & Appetizers</a>
      <a>Special Platters</a>
      <a>Sandwiches & Side Orders</a>
      <a>Mexican Food</a>
      <a>Beverages</a>
      <a>Visit Us</a>
    </div>
  )
}

export default Nav;