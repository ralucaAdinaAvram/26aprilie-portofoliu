import React, {Fragment, useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import { Home } from "../pages/Home";

const Navbar = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <>
      <div className="topMenu">
        <div className="l-topMenu">A A</div>
        <div className="r-topMenu">
          <div className="container-topMenu">
            <div className="topMenuLinks active-topMenu">
              <Link to="/home">Home</Link>
            </div>
            <div className="topMenuLinks active-topMenu">
              <Link to="/skills">Skills</Link>
            </div>
            <div className="topMenuLinks active-topMenu">
              <Link to="/about">About</Link>
            </div>
            <div className="topMenuLinks active-topMenu">
              <Link to="/portofolio">Portofolio</Link>
            </div>
            <div className="topMenuLinks active-topMenu">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar"></div>
    </>
  );
};

export default Navbar;
