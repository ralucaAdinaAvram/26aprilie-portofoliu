import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portofolio from "./pages/Portofolio";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/ContactUs";
import SocialMedia from "./components/SocialMedia";
import Navbar from "./components/Navbar";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
