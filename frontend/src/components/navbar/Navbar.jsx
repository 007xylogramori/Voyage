import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <div className="navContainer">
        <h3><span className="logo">Voyage.com</span></h3>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
