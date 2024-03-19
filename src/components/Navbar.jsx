import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '/LogoNavbar.png';
import "../styles/Navbar.css"

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className={`mobile-menu-icon ${mobileMenuOpen ? 'opened' : ''}`} onClick={toggleMenu}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className="logo">
        <img className='Logo' src={logo} alt="Logo" />
      </div>
      <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
        {}
        <li><a href="/">Home</a></li>
        <li><a href="/News">News</a></li>
        <li><a href="./Interaktionen">Interaktionen</a></li>
        <li><a href="./impressum">Impressum</a></li>
        {}
      </ul>
    </nav>
  );
}

export default Navbar;
