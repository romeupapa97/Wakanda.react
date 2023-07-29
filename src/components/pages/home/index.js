import React from "react";
import Header from "../../header/header";
import "./styles.css";
import Video from '../../../assets/Pantera Negra_ Wakanda para Sempre _ Marvel Studios _ Trailer Oficial Dublado.mp4'
import Cards from "../../cards";
import Logo from '../../../assets/Logo wakanda.jpg';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <div id="banner"></div>
      <div id='trailer-container'>
        <div className='content'>
          <video controls className='trailer'>
            <source src={Video} />
            your browser has no support for video!
          </video>
          <div id='synopses'>
            <p className='description'>
              Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje
              fight to protect their nation from intervening world powers
              after the death of King T'Challa.
            </p>
            <button className="button">Buy ingress</button>
          </div>
        </div>
      </div>
      <Cards/>
      <footer>
        <img id='logo' src={Logo}/>
        <span>All rights reserved ©copyright</span>
        <span>Developed by:Romeu Papa Vieira Có</span>
        <nav className="footer-navigation">
          <ul className="footer-list">
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
      </footer>
    </>
  );
}

export default Home;
