import React from 'react';
import Header from "../../header/header"
import './styles.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo wakanda.jpg'
import User1 from '../../../assets/Silvia.jpg'
import User2 from '../../../assets/Cinzas.jpg'
import User3 from '../../../assets/Mello.jpg'
import User4 from '../../../assets/Souza.jpg'

function Commentary(){
  return(
    <>
      <Header/>
      <div id="banner"></div>
      <div className="content-container">
      <p>COMMENTARIES</p>
        <div className="profile-container">
          <div className="profile-content">
            <div className="profile-cards">
              <img src={User1} alt="profile" className='silvia' />
              <span className="nome-text">SILVIA</span>
              <span className="profile-text">
                Comovente, literalmente profundo. Efeitos especiais da coração de 
                ferro deixam a desejar. Desenvolvimento da história muito bem feito. Um filme de
                super herói que quebra os paradigmas já impostos pelos clássicos.
              </span>
            </div>
          </div>
          <div className="profile-content">
            <div className="profile-cards">
              <img src={User2} alt="profile" className='cinzas' />
              <span className="nome-text">CINZAS</span>
              <span className="profile-text">
                Gostei do filme, parabéns pela homenagem ao ator que faleceu. "o filme está explicando que não 
                apenas os homens podem ser pantera negra, mas as mulheres também!"
                o gráfico incrivelmente bonito, histórias maravilhosas, atores perfeitos etc...
                Também gostei da participação de atores negros.
              </span>
            </div>
          </div>
          <div className="profile-content">
            <div className="profile-cards">
              <img src={User3} alt="profile" className='mello' />
              <span className="nome-text">MELLO</span>
              <span className="profile-text">
                Mais um filme MCU que desperdiça mais uma história com potencial.
                Se tornou uma fábrica de filmes: são confusos, desleixados com roteiro, 
                causa e consequência só vale quando convém.
                Pantera Negra 2 é bonito, emocionante, um visual incrível e começa bem. Mas... 
                Logo se torna um filme mediano com a repetição das mesmas fórmulas....e aquele
                gancho pra quem sabe - a gente sabe - uma sequência ou mais um filme médio.
              </span>
            </div>
          </div>
          <div className="profile-content">
            <div className="profile-cards">
              <img src={User4} alt="profile" className='souza' />
              <span className="nome-text">SOUZA</span>
              <span className="profile-text">
                Um filme emocionante do começo ao fim e ensina uma linda lição,a vingança não leva ao lugar nenhum,e o 
                perdão sempre vence!E que há pontos de vistas diferentes,mas com o mesmo propósito ! Aguardando ansiosa
                pela continuação!Não levem em conta as críticas negativas daqui ,o filme é muito lindo.
              </span>
            </div>
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
  )
}
export default Commentary;