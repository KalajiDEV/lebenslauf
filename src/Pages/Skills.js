import React from "react";

import "../style/Skills.css";
import Nav from "../components/Nav";
import Aftereffects from "../img/after-effects.png";
import Css from "../img/css-3.png";
import Figma from "../img/figma.png";
import Illustrator from "../img/illustrator.png";
import Java from "../img/java.png";
import Js from "../img/js.png";
import Node from "../img/node-js.png";
import Office from "../img/office.png";
import Physics from "../img/physics.png";
import Premiere from "../img/premiere-pro.png";
import Xd from "../img/xd.png";
import Html from "../img/html.png";
import { Helmet } from "react-helmet-async";

const Skills = () => {
  return (
    <div className="skills">
      <Helmet>
        <title>skills</title>
        <meta name="description" content="skills Page " />
      </Helmet>
      <Nav />
      <div className="container">
        <div className="imgs">
          <img src={Physics} alt="" />
          <img src={Html} alt="" />
          <img src={Js} alt="" />
          <img src={Css} alt="" />
          <img src={Figma} alt="" />
          <img src={Java} alt="" />
          <img src={Node} alt="" />
          <img src={Office} alt="" />
          <img src={Aftereffects} alt="" />
          <img src={Illustrator} alt="" />
          <img src={Premiere} alt="" />
          <img src={Xd} alt="" />
        </div>
        <div className="skills-box">
          <article>
            <div className="circular-progress html">
              <span className="progress-value">70%</span>
            </div>
            <span className="text">html</span>
          </article>
          <article>
            <div className="circular-progress css">
              <span className="progress-value">70%</span>
            </div>
            <span className="text">Css</span>
          </article>
          <article>
            <div className="circular-progress js">
              <span className="progress-value">10%</span>
            </div>
            <span className="text">Js</span>
          </article>
          <article>
            <div className="circular-progress Photoshop">
              <span className="progress-value">40%</span>
            </div>
            <span className="text">
              Adobe <br /> Photoshop
            </span>
          </article>
          <article>
            <div className="circular-progress illustrator">
              <span className="progress-value">40%</span>
            </div>
            <span className="text">
              Adobe <br /> illustrator
            </span>
          </article>
          <article>
            <div className="circular-progress premiere">
              <span className="progress-value">10%</span>
            </div>
            <span className="text">
              Adobe <br /> premiere pro
            </span>
          </article>
          <article>
            <div className="circular-progress figma">
              <span className="progress-value">50%</span>
            </div>
            <span className="text">figma </span>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Skills;
