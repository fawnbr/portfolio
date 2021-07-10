
import { useState } from 'react';
import { BiMenu, AiOutlineClose } from 'react-icons/all';
import logoImg from '../../assets/logo.png';
import './styles.scss';

export function Header() {

  const [menuActive, setMenuActive] = useState(false);
  const [ulState, setUlState] = useState(false);
  const handleMenuMode = () => {
    setMenuActive(!menuActive);
  }
  const handleUlState = () => {
    setUlState(!ulState);
  }

  return (
    <div className="container">
      <header className="header">
        <img src={logoImg} alt="Logo" width="32px" />
        <nav className="menuDesktop">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#whoami">Quem sou</a></li>
            <li><a href="#knowledges">Conhecimentos</a></li>
            <li><a href="#projects">Projetos</a></li>
          </ul>
        </nav>
        <nav className="menuMobile">
          <div className="icons" onClick={handleMenuMode}>
            {menuActive ?
              <AiOutlineClose onClick={handleUlState} />
              :
              <BiMenu onClick={handleUlState} />
            }
          </div>
          <ul className={ulState ? 'menuOpened' : 'menuClosed'}>
            <li><a href="/">Home</a></li>
            <li><a href="#whoami">Quem sou</a></li>
            <li><a href="#knowledges">Conhecimentos</a></li>
            <li><a href="#projects">Projetos</a></li>
          </ul>
        </nav>
      </header>
    </div >
  );
}