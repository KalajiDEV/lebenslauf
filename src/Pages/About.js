import Nav from "../components/Nav";
import AboutNav from "../components/About-nav";
import "../style/About.css";
import Pic from "../img/myPic.jpg";
import React from "react";

const About = () => {
  return (
    <>
      <Nav />
      <AboutNav />

      <div className="container">
        <div className="about">
          <img src={Pic} alt="" />
          <p>
            My name is Mohammad kalaji 23 years old from syria, in Germany for 5
            years <br />I taught myself HTML CSS and some JS using the React
            library and <br />I would like to work as a frontend developer
            because I like colors and design, and I can also work remotely in
            the future.
            <br />I like taking photos, editing photos, I like to travel
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
