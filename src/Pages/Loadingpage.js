import React from "react";
import "../style/Loadingpage.css";
import { Link } from "react-router-dom";
import Logo from "../img/logo-kalaji.png";

const Loadingpage = () => {
  return (
    <div className="Loadingpage">
      <div className="center">
        <div className="ring"></div>
        <span>coming soon . . .</span>
      </div>
      <Link to="/home">
        <img src={Logo} alt="" />
      </Link>
      <p>Lebenslauf</p>
    </div>
  );
};

export default Loadingpage;
