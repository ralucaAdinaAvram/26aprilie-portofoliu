import React from "react";
import "./Portofolio.css";
import Flowers from "../assets/flowers.webp";
import Turbine from "../assets/turbine-about.webp"; // Update the import path
import Dining from "../assets/dinning3.jpg"; // Update the import path
import { useNavigate } from "react-router-dom";
import SocialMedia from "../components/SocialMedia";

const Portofolio = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="portofolioContainer">
      <div className="project">
        <div className="projectCard">
          <div className="projectImg">
            <img src={Flowers} alt="Flowers" />
          </div>
          <div className="projectName">
            <a href="https://cart-app-master.vercel.app/" target="_blank">
              <button
                className="portfolio-btn"
                onClick={() => navigate("/ApptechShop")}
              >
                Flower Shop
              </button>
            </a>
          </div>
        </div>

        <div className="projectCard">
          <div className="projectImg">
            <img src={Turbine} alt="Turbine" />
          </div>
          <div className="projectName">
            <a
              href="https://windmill-khe2zbeq6-ralucaadinaavrams-projects.vercel.app/"
              target="_blank"
            >
              <button
                className="portfolio-btn"
                onClick={() => navigate("/ApptechShop")}
              >
                Green Energy
              </button>
            </a>
          </div>
        </div>

        <div className="projectCard">
          <div className="projectImg">
            <img src={Dining} alt="Dining" />
          </div>
          <div className="projectName">
            <a href="https://dragonul-rosu-xvle.vercel.app/" target="_blank">
              <button
                className="portfolio-btn"
                onClick={() => navigate("/ApptechShop")}
              >
                Eatery
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="ssocial-media">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Portofolio;
