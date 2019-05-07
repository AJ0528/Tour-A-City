import React from 'react'
import "./Navbar.scss";
import logo from "../../logo.png";
export default function Navbar() {
  return (
   <nav className="navbar">
   <img src={logo}alt="tour a city logo"/>
   <ul className="nav-links">
   <li>
       <a href="/Home" className="nav-link">
       Home
        </a>
       </li>
    <li>
      <a href="/About" className="nav-link">
       About
        </a>
       </li>
       <li>
       <a href="Tour" className="nav-link active">
       Tours
        </a>
       </li>
    </ul>
 </nav>
     
  )
}
