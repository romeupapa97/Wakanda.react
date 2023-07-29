import React from "react";
import Header from "../../header/header";
import { Link } from "react-router-dom";
import Logo from '../../../assets/Logo wakanda.jpg'
import './styles.css';

function Contact() {
  return (
    <>
      <Header />
      <div id="banner"></div>
      <div className="content-container">
        <div class="form-formulario">
          <div class="form-container">
            <form>
              <span>DEIXE O SEU CONTATO AQUI</span>
              <label reactFor="name">Complete name</label>
              <input style={{ display: 'block' }} id="name" type="text" name="name" placeholder="write your name here" />
              <label reactFor="email">Email</label>
              <input style={{ display: 'block' }} id="email" type="email" name="email" placeholder="put valid email" />
              <label reactFor="telefone">Telefone</label>
              <input style={{ display: 'block' }} id="telefone" type="tel" name="telefone" required placeholder="(xx) xxxxx-xxxx" />
              <label reactFor="checkBox">Select your sex</label>
              <label reactFor="radio">Masculine</label>
              <input style={{ display: 'block' }} id="radio" type="radio" name="sexo" value="Masculine" />
              <label reactFor="radio">Feminine</label>
              <input style={{ display: 'block' }} id="radio" type="radio" name="sexo" value="Feminine" />
              <label reactFor="radio">Other</label>
              <input style={{ display: 'block' }} id="radio" type="radio" name="sexo" value="Other" />
              <label reactFor="mensagem">Message</label>
              <textarea style={{ display: 'block' }} id="message" name="message" rows="5" placeholder="Escreva-nos aqui!">
              </textarea>
              <button>Send</button>
            </form>
          </div>  
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
  );
}

export default Contact;
