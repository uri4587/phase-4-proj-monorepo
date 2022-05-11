import React from 'react'
import {NavLink, Link} from 'react-router-dom'

function Header() {
  return (
    <nav>
    <ul className="list">
        
        <NavLink to="/" className="items">Home</NavLink>
        <li className="items">Services</li>
        <li className="items">Contact</li>
      </ul>
    <button className="btn">BTN</button>
  </nav>
  )
}

export default Header