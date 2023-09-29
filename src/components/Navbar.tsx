import React, { useState } from "react"; // Import React at the beginning

import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="desktopNav menu">
        <div className="logo">
          <p id="logoText">AA</p>
        </div>

        <div className="header_nav">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="skills">Skills</Link>
          <Link to="portofolio">Portofolio </Link>
          <Link to="contactus">Contact </Link>
        </div>
      </nav>
      <nav className=" mobileNav menu">
        <div className="logo">A A</div>
        <p onClick={toggleMenu}>
          <AiOutlineMenu color="white" />
        </p>
        {isOpen && (
          <div className="mobileHamburgerMenu">
            <div className="header_nav">
              <p className="closeButton" onClick={toggleMenu}>
                <AiOutlineClose />
              </p>
              <Link to="/">Home</Link>
              <Link to="about">About</Link>
              <Link to="skills">Skills</Link>
              <Link to="portofolio">Portofolio </Link>
              <Link to="contactus">Contact </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
