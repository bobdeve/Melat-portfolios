import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        <span>Melat </span> Desta
      </a>
      <label htmlFor="" className='icons' onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </label>

      <nav className={`navbar ${isOpen ? 'show' : ''}`}>
        <a href="#" onClick={closeMenu}>Portfolio</a>
        <a href="#" onClick={closeMenu}>Services</a>
        <a href="#" onClick={closeMenu}>Experience</a>
        <a href="#" onClick={closeMenu}>Projects</a>
        <a href="#" onClick={closeMenu}>Education</a>
      </nav>
      <a href="#footer" className="contact-me" onClick={closeMenu}>Contact me</a>
    </header>
  );
}
