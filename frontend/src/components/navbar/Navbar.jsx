import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
      <div className="navContainer">
       <Link to="/" style={{color:"inherit",textDecoration:"none"}}> 
       <h3><span className="logo">Voyage.com</span></h3></Link>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
