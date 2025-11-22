import "./header.scss";
import logo from "../../assets/logo.png";
import { useState } from 'react'

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <img src={logo} alt="logo" />

      <ul className={`menuSanduiche ${showMenu ? "show" : ""}`} onClick={toggleMenu}>
        <li>LOOKS</li>
        <li>LANÇAMENTOS</li>
        <li>NOVIDADES</li>
      </ul>

      <div className="menuButton" onClick={toggleMenu}>
        <span className="linha"></span>
        <span className="linha"></span>
        <span className="linha"></span>
      </div>
    </header>
  );
}

export default Header;
