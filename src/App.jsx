import React, { useState } from "react";
import NavBar from "./Components/Common/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Common/Footer";
import Login from "./Pages/Login";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="relative">
      <NavBar setShowLogin={setShowLogin} showLogin={showLogin} />
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;


