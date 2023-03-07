import React from "react";
import Nav from "../components/Nav";
import AboutNav from "../components/About-nav";
import "../style/About.css";
const Berufserfahrungen = () => {
  return (
    <div className="container">
      <Nav />
      <AboutNav />
      <div className="about-compo">
        <div className="box">
          <p>02/2023 - 02/2023</p>
          <p>
            Vollzeitarbeit bei Backwerk in Singen als Bäcker{" "}
            <span>hidde text</span>
          </p>
        </div>
        <div className="box">
          <p>10/2022 – 02/2023</p>
          <p>
            Aushilfe-Minijob bei Backwerk in Singen als Verkäufer an der Kasse.
          </p>
        </div>
        <div className="box">
          <p>09/2022 – 12/2022</p>
          <p>
            Ausbildung als Fachinformatiker Anwendungsentwicklung bei{" "}
            <a href="https://www.sybit.de/">Sybit GmbH</a> in Radolfzell
          </p>
        </div>
        <div className="box">
          <p>08/2019 -01/2021</p>
          <p>
            Als Fotoassistent bei der Firma ‚René Lamb Fotodesign GmbH‘ in
            Radolfzell
          </p>
        </div>
        <div className="box">
          <p>03/2017 – 03/2018</p>
          <p>Verkäufer in einem Süßwarenladen in Damaskus, Syrien</p>
        </div>
        <div className="box">
          <p>05/2010 – 03/2017</p>
          <p>Verkäufer für Elektronische Kleinteile in Damaskus, Syrien</p>
        </div>
      </div>
    </div>
  );
};

export default Berufserfahrungen;
