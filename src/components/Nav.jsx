import React from 'react'
import logo from '../assets/logo.png';


function Nav() {
    // Hamburger menu toggle
    const toggleMenu = () => {
        const navMenu = document.querySelector('#nav-menu');
        const hamburger = document.querySelector('#hamburger');
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    };
  return (
    <>
    <nav>
        <a id="brand" href="#" aria-label="De'luxe Leather Atelier home">
            <img src={logo} alt="Logo" />
        </a>
        <div id="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul id="nav-menu">
            <li>
                <a href="#">Home</a>
                <a href="#features">Features</a>
                <a href="#gallery">Gallery</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Nav
