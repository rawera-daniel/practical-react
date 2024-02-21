import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/pages/Home";
import AboutPage from "./views/pages/AboutPage";
import NotFoundPage from "./views/pages/NotFoundPage";
import { Container } from "@mui/material";

const RouteCollection = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
};

export default RouteCollection;
