import React from "react";
import NotFoundImg from "../img/undraw_page_not_found_re_e9o6.svg";
import { Link } from "react-router-dom";
import "../style/NotFoundPage.css";
import { Helmet } from "react-helmet-async";
const NotfoundPage = () => {
  return (
    <div className="notFoundPage">
      <Helmet>
        <title>Not Found Page</title>
        <meta name="description" content="This page is not found " />
      </Helmet>
      <img src={NotFoundImg} alt="" />
      <h2>Page not found</h2>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default NotfoundPage;
