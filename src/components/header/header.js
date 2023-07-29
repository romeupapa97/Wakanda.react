import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import Logo from '../../assets/Logo wakanda.jpg';


function Header(){
  return (
    <header>
      <img id="logo" src={Logo}/>
      <nav>
        <ul>
          <Link style={{textDecoration:"none"}} to='/'>
            <li>Home</li>
          </Link>
          <Link style={{textDecoration:"none"}} to='/photos'>
            <li>Photo</li>
          </Link>
          <Link style={{textDecoration:"none"}} to='/contact'>
            <li>Contact</li>
          </Link>
          <Link style={{textDecoration:"none"}} to='/commentary'>
            <li>Commentary </li>
          </Link>
            
        </ul>
      </nav>
    </header>
  )
}

export default Header