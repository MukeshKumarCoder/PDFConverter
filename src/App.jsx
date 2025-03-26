import React from "react";
import NavBar from "./Components/Common/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
