import React from "react";
import Nav from "../components/Nav";
import AboutNav from "../components/About-nav";
import "../style/About.css";

const Praktikum = () => {
  return (
    <div className="container">
      <Nav />
      <AboutNav />
      <div className="about-compo">
        <div className="box">
          <p>11/2021</p>
          <p>
            Einwöchiges praktikum als Software­entwickler bei Sybit{" "}
            <a href="https://coding-camp.sybit.de/">Coding-Camp</a>
            <p>
              project: <a href="https://muelli.app/">muelli </a>
              Wie entsorgt man Müll im Landkreis Konstanz …
            </p>
          </p>
        </div>
        <div className="box">
          <p>10/2021</p>
          <p>
            Einwöchiges Praktikum bei McDonald’s in Singen als Verkäufer an der
            Kasse.
          </p>
        </div>
        <div className="box">
          <p>03/2019</p>
          <p>
            Zweiwöchiges Praktikum bei der{" "}
            <a href="https://www.rene-lamb.de/">René Lamb Fotodesign GmbH‘</a>{" "}
            in Radolfzell als Fotoassistent
          </p>
        </div>
      </div>
    </div>
  );
};

export default Praktikum;
