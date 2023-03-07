// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import Home from "./Pages/Home";
// import About from "./Pages/About";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Loadingpage from "./Pages/Loadingpage";
import Home from "./Pages/Home";
// import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Gallery from "./Pages/Gallery";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Ausbildung from "./About-Pages/Ausbildung";
import Praktikum from "./About-Pages/Praktikum";
import Berufserfahrungen from "./About-Pages/Berufserfahrungen";

import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/ausbildung",
    element: <Ausbildung />,
  },
  {
    path: "/praktikum",
    element: <Praktikum />,
  },
  {
    path: "/berufserfahrungen",
    element: <Berufserfahrungen />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
