import React from "react";
import Nav from "../components/Nav";
import LoadingPage from "../Pages/Loadingpage";

import { Helmet } from "react-helmet-async";
const Contact = () => {
  return (
    <div className="">
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Contact Page " />
      </Helmet>
      <Nav />
      <LoadingPage />
    </div>
  );
};

export default Contact;
