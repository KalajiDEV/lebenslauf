import React from "react";
// import "../About-pages/css/Ausbildung.css";
import Nav from "../components/Nav";
import AboutNav from "../components/About-nav";
import "../style/About.css";

const Ausbildung = () => {
  return (
    <div className="container">
      <Nav />
      <AboutNav />
      <div className="about-compo">
        <div className="box">
          <p>09/2022 – 12/2022</p>
          <p>
            Zeppelin-Gewerbeschule in Konstanz Schwerpunkt:
            Anwendungsentwicklung
          </p>
        </div>
        {/*  */}
        <div className="box">
          <p>09/2020 - 07/2022</p>
          <p>
            Zweijährige Berufsfachschule Elektrotechnik (2BFE) an der
            „Hohentwiel-Gewerbeschule“ in Singen / Deutschland Angestrebter
            Abschluss: Mittlerer Bildungsabschluss
          </p>
        </div>
        {/*  */}
        <div className="box">
          <p>09/2019 – 07/2020</p>
          <p>
            Vorqualifizierungsjahr Arbeit & Beruf (VAB-A) am
            „Berufsschulzentrum“ in Radolfzell Abschluss: Hauptschulabschluss
          </p>
        </div>
        {/*  */}
        <div className="box">
          <p>09/2018 – 07/2019</p>
          <p>
            Vorqualifizierungsjahr Arbeit & Beruf mit Schwerpunkt Erwerb von
            Deutschkenntnissen (VAB-O) an der „Mettnau Schule“ in Radolfzell
            Abschluss: Deutsch B1-Niveau
          </p>
        </div>
        {/*  */}
        <div className="box">
          <p>09/2016 – 03/2018</p>
          <p>
            Technisches-Gymnasium „Abdullah Alther“ in Damaskus, Syrien
            Schwerpunkt: Computertechnik, Abschluss: Konnte wegen Krieg nicht
            beendet werden
          </p>
        </div>
        {/*  */}
        <div className="box">
          <p>09/2013 – 07/2015</p>
          <p>
            Mittelschule „Abn Altherrs“ in Damaskus, Syrien{" "}
            <span>hidde text</span>
          </p>
        </div>
        {/*  */}
        <div className="box">
          <p>09/2006 – 07/2012</p>
          <p>
            Grundschule „Alzahra“ in Damaskus, Syrien <span>hidde text</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ausbildung;
