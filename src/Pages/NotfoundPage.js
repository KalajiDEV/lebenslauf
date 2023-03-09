import React from "react";
import NotFoundImg from "../img/undraw_page_not_found_re_e9o6.svg";
import { Link } from "react-router-dom";
import "../style/NotFoundPage.css";
const NotfoundPage = () => {
  return (
    <div className="notFoundPage">
      <img src={NotFoundImg} alt="" />
      <h2>Page not found</h2>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default NotfoundPage;
