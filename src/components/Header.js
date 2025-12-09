import React from "react";
import "../styles/Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-left">
        <h2 className="logo">SN ENGINEERS</h2>
      </div>

      <nav>
        <Link to='/'>Overview</Link>
        <Link to='/mission'>Mission</Link>
        <Link to='/vision'>Vision</Link>
        <Link to='/services'>Services</Link>
        <Link to='/equipment'>Equipments</Link>
        <Link to='/workForce'>Work force</Link>
        <Link to='/completedProject'>Completed Projects</Link>
        <Link to='/ongoingProject'>Ongoing Projects</Link>
        <Link to='/client'>Clients</Link>
        <Link to='/contact'>Contact</Link>
      </nav>

      <button className="contact-btn"><Link to="/contact">Get In Touch</Link></button>
    </header>
  );
};

export default Header;
