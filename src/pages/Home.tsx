import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import SocialMedia from "../components/SocialMedia";

const Home = () => {
  return (
    <div className="container-home">
      <div className="landing">
        <div className="presentation">
          <h1>Hi, my name is </h1>
          <p>Adina Avram</p>
          <p>I am a self-taught front end web developer.</p>
        </div>
        <div className="button">
          <Link to="/portofolio">
            <button>View Portofolio</button>
          </Link>
        </div>
      </div>
      <div className="sociall-media">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Home;
