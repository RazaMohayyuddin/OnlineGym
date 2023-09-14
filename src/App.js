import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Home from "./Pages/Home";
import ExerciseDetail from "./Pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  //main component
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
