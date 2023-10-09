import React from "react";
import "./About.css";
import SocialMedia from "../components/SocialMedia";

const About = (): JSX.Element => {
  return (
    <div className="about-container">
      <div className="about-section">
        <div className="title">
          <h2>About</h2>
        </div>
        <div className="about-content">
          <div className="content-l">
            <p className="type"> I am Adina, nice to meet you!</p>
          </div>
          <div className="content-r">
            <p className="type">
              I am passionate about building websites, improving existing
              software, and testing and debugging code . I specialise in
              creating web applications that can be viewed on the computer,
              tablet or mobile. The projects from the Portofolio page have been
              created by myself entirely, I hope you will like them.
            </p>
          </div>
        </div>
      </div>
      <div className="social-media">
        <SocialMedia />
      </div>
    </div>
  );
};

export default About;
