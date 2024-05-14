import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '/Logo.png';
import { useNavigate } from 'react-router-dom';
import "../styles/Navbar.css"

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  let navigate = useNavigate();
  const navigateToNews = () => {
      navigate('/News'); 
  };

  const navigateToInteraktionen = () => {
      navigate('/Interaktionen'); 
  };

  const navigateToImpressum = () => {
      navigate('/impressum'); 
  };

  return (
    <nav className="navbar">
      <div className={`mobile-menu-icon ${mobileMenuOpen ? 'opened' : ''}`} onClick={toggleMenu}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className="logo">
        <img className='Logo' href='/Home' src={logo} alt="Logo" />
      </div>
      <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
        {}
        <li><a href="" onClick={navigateToNews}>Home</a></li>
        <li><a href="" onClick={navigateToNews}>News</a></li>
        <li><a href="" onClick={navigateToInteraktionen}>Interaktionen</a></li>
        <li><a href="" onClick={navigateToImpressum}>Impressum</a></li>
        {}
      </ul>
    </nav>
  );
}

export default Navbar;
