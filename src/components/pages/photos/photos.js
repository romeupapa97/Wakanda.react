import React from "react";
import Header from "../../header/header";
import './styles.css';
import { Link } from "react-router-dom";
import Logo from '../../../assets/Logo wakanda.jpg'

function Photos(){
  return (
    <>
      <Header/>
      <div id="Banner"></div>
      <div class="actor-cards-container">
        <div class="cards-content">
          <div class="card photo-1">Angela Evelyn Bassett-Ramonda</div>
          <div class="card photo-2">Letitia Michelle Wright-Shuri</div>
          <div class="card photo-3">Winston Duke-M'baku</div>
          <div class="card photo-4">Tenoch Huerta Mejía-Namor</div>
          <div class="card photo-5">Lupita Amondi Nyong'o-Nakia</div>
          <div class="card photo-6">Danai Jekesai Gurira-Okoye</div>
          <div class="card photo-7">Mabel Cadena-Namora</div>
          <div class="card photo-8">Dominique Thorne-Riri Williams</div>
        </div>

      </div>
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
  )
}
export default Photos;