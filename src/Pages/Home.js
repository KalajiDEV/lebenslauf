import "../style/Home.css";
import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import Pic from "../img/KalajiDev-pic.png";
import { Helmet } from "react-helmet-async";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const AboutMe = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home page " />
        <style type="text/css">{``}</style>
      </Helmet>
      <div className="Home">
        <Nav />
        <div className="homePage">
          <div className="info">
            <h1 className="animate__animated animate__bounce animate__delay-2s">
              I'am <br /> Mohammad Kalaji
            </h1>
            <p>front end developer</p>
            <Link>
              <button>Download CV</button>
            </Link>
            <div className="socialMedia">
              <a
                target="_blank"
                href="https://www.instagram.com/mohammadkl.20/"
              >
                <AiOutlineInstagram />
              </a>
              <a target="_blank" href="https://github.com/KalajiDEV">
                <AiFillGithub />
              </a>
              <a target="_blank" href="mailto: mouhmedkalaji30@gmail.com">
                <AiOutlineMail />
              </a>
              <a rel="noreferrer" target="_blank" href="/">
                <AiOutlineWhatsApp />
              </a>
            </div>
          </div>
          <div className="pic">
            <img src={Pic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
