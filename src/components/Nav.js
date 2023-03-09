import "../style/nav.css";
import { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import { FiAlignRight } from "react-icons/fi";
import React from "react";
function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <Link to="/Home">
            <h3>kalaji</h3>
          </Link>
          <nav ref={navRef}>
            <NavLink to="/Home">home</NavLink>
            <NavLink to="/Skills">Skills</NavLink>
            <NavLink to="/Gallery">Gallery</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FiAlignRight />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
