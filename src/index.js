import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Gallery from "./Pages/Gallery";
import NotfoundPage from "./Pages/NotfoundPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Ausbildung from "./About-Pages/Ausbildung";
import Praktikum from "./About-Pages/Praktikum";
import Berufserfahrungen from "./About-Pages/Berufserfahrungen";
import { HelmetProvider } from "react-helmet-async";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotfoundPage />,
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
    {/* here input my HelmetProvider than ==  APP or Router  */}
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();