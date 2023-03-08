import React from "react";
import { NavLink } from "react-router-dom";

const AboutNav = () => {
  return (
    <div>
      <div className="container">
        <div className="about-nav">
          <NavLink to="/Ausbildung">Schul-/Ausbildung</NavLink>
          <NavLink to="/Praktikum">Praktikum</NavLink>
          <NavLink to="/berufserfahrungen">Berufserfahrungen</NavLink>
        </div>
      </div>
    </div>
  );
};

export default AboutNav;
