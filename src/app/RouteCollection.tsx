import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/pages/Home";
import AboutPage from "./views/pages/AboutPage";

const RouteCollection = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default RouteCollection;
