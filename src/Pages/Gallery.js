import React from "react";
import Nav from "../components/Nav";
import "../style/Gallery.css";

import Pic from "../img/Lightroom Gallery/2022_07_03_23_45_IMG_4788.JPG";
import Pic1 from "../img/Lightroom Gallery/2022_07_04_10_42_IMG_4792.JPG";
import Pic2 from "../img/Lightroom Gallery/2022_08_14_02_09_IMG_5639.JPG";
import Pic3 from "../img/Lightroom Gallery/2022_10_02_18_34_IMG_6893.JPG";
import Pic4 from "../img/Lightroom Gallery/2022_10_05_07_42_IMG_6948.JPG";
import Pic5 from "../img/Lightroom Gallery/IMG_1468.JPG";
import Pic6 from "../img/Lightroom Gallery/IMG_1482.JPG";
import Pic7 from "../img/Lightroom Gallery/IMG_2046.JPG";
import Pic8 from "../img/Lightroom Gallery/IMG_2946.JPG";
import Pic9 from "../img/Lightroom Gallery/IMG_3174.JPG";
import Pic10 from "../img/Lightroom Gallery/IMG_3179.JPG";
import Pic11 from "../img/Lightroom Gallery/IMG_3219.JPG";
import Pic12 from "../img/Lightroom Gallery/IMG_3273.JPG";
import Pic13 from "../img/Lightroom Gallery/IMG_3276.JPG";
import Pic14 from "../img/Lightroom Gallery/IMG_3459.jpg";
import Pic15 from "../img/Lightroom Gallery/IMG_3725.JPG";
import Pic16 from "../img/Lightroom Gallery/IMG_3931.JPG";
import Pic17 from "../img/Lightroom Gallery/IMG_4178.JPG";
import Pic18 from "../img/Lightroom Gallery/IMG_4186.JPG";
import Pic19 from "../img/Lightroom Gallery/IMG_4204.JPG";
import Pic20 from "../img/Lightroom Gallery/IMG_4354_jpg.jpg";
import Pic21 from "../img/Lightroom Gallery/IMG_4362.jpg";
import Pic22 from "../img/Lightroom Gallery/IMG_4457.JPG";
import Pic23 from "../img/Lightroom Gallery/IMG_4466.JPG";
import Pic24 from "../img/Lightroom Gallery/IMG_6656.JPG";
import Pic25 from "../img/Lightroom Gallery/IMG_6683.JPG";
import Pic26 from "../img/Lightroom Gallery/IMG_6809.JPG";
import Pic27 from "../img/Lightroom Gallery/IMG_6823.JPG";
import Pic28 from "../img/Lightroom Gallery/IMG_7060.JPG";
import Pic29 from "../img/Lightroom Gallery/IMG_7156.JPG";
import Pic30 from "../img/Lightroom Gallery/IMG_7467.JPG";
import Pic31 from "../img/Lightroom Gallery/IMG_7499.JPG";
import Pic32 from "../img/Lightroom Gallery/IMG_7855.JPG";
import Pic33 from "../img/Lightroom Gallery/IMG_8231.JPG";
import Pic34 from "../img/Lightroom Gallery/IMG_8535.JPG";
import Pic35 from "../img/Lightroom Gallery/IMG_8538.JPG";
import Pic36 from "../img/Lightroom Gallery/IMG_8591.JPG";
import Pic37 from "../img/Lightroom Gallery/Snapseed.JPG";

// const boxGallery = document.getElementById("box-gallery");
// boxGallery.addEventListener("click", (eo) => {
//   if (eo.target.className === "gallery") {
//     eo.target.parentElement.classList.add("viewPic");
//   } else eo.target.classList.remove("viewPic");
// });

const Gallery = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="desc">
          <p>
            Here are a few pictures I took on the street, I am interested in
            taking pictures.
          </p>
        </div>
        <div id="box-gallery" className="gallery_box">
          <div>
            <img className="gallery" src={Pic} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic1} alt="" />
          </div>

          <div>
            <img className="gallery" src={Pic5} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic6} alt="" />
          </div>

          <div>
            <img className="gallery" src={Pic8} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic9} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic10} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic11} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic12} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic13} alt="" />
          </div>

          <div>
            <img className="gallery" src={Pic15} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic16} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic17} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic18} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic19} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic20} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic21} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic22} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic23} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic24} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic25} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic26} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic27} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic28} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic29} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic30} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic31} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic32} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic33} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic34} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic35} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic36} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic37} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic3} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic7} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic2} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic4} alt="" />
          </div>
          <div>
            <img className="gallery" src={Pic14} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
