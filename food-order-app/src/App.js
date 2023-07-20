import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { About, Header, Home, Location, Menu } from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ background: "#000" }}>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
        <Route path="/food" element={<About />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
