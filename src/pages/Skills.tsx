import React from "react";
import "./Skills.css";
import css from "../assests/css.png";
import javascript from "../assests/javascript.png";
import typescript from "../assests/typescript.png";
import github from "../assests/github.png";
import html from "../assests/html.png";
import react from "../assests/react.png";
import SocialMedia from "../components/SocialMedia";

const Skills = () => {
  return (
    <div className="skills_body">
      <div className="skills_container">
        <div className="skills_title">
          <h2>Skills</h2>
          <p>These are the technologies that I have practiced with: </p>
        </div>

        <div className="skills">
          <div className="skills_card">
            <div className="skills_img">
              <img src={react} alt="" />
            </div>
            <div className="skills_name">
              <p>REACT</p>
            </div>
          </div>
          <div className="skills_card ">
            <div className="skills_img">
              <img src={typescript} alt="" />
            </div>
            <div className="skills_name long">
              <p>TYPESCRIPT</p>
            </div>
          </div>
          <div className="skills_card ">
            <div className="skills_img">
              <img src={javascript} alt="" />
            </div>
            <div className="skills_name long">
              <p>JAVASCRIPT</p>
            </div>
          </div>
          <div className="skills_card">
            <div className="skills_img">
              <img src={css} alt="" />
            </div>
            <div className="skills_name">
              <p>CSS</p>
            </div>
          </div>

          <div className="skills_card">
            <div className="skills_img">
              <img src={html} alt="" />
            </div>
            <div className="skills_name">
              <p>HTML</p>
            </div>
          </div>

          <div className="skills_card">
            <div className="skills_img">
              <img src={github} alt="" />
            </div>
            <div className="skills_name">
              <p>GITHUB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="social-media">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Skills;
