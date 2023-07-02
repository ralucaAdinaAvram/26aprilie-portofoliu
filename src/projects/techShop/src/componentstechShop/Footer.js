import React from 'react';
import '../componentstechShop/Footer.css';
import {Link} from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { BiAnalyse } from "react-icons/bi";




function Footer() {
  return (
    
    
    <div className="footer">
        <div className="left-footer">

        <div className="logo">
      <p>TRL<BiAnalyse  className="logo-size"/></p>
    </div>

        <div className="address">
       
                <p className="adress-links"><FaMapMarkerAlt/>    21 Caulidor Terrace, NE4 7GB, Newcastle upon Tyne</p>
                <p className="adress-links"><FaPhoneVolume />      +44 07570 949 597</p>
                <p className="adress-links"><AiFillMail/>         TRL@yahoo.com</p>
           
        </div>
        </div>




        <div className="links">
            <div className="about-the-company">
                <h2>About the company</h2>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                     in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  </p>
            </div>

            <ul>
            <li><a href="https://www.facebook.com/"><FaFacebookSquare/></a></li>
                <li><a href="https://www.instagram.com/"><FaInstagram/></a></li>
                <li><a href="https://www.twitter.com/"><FaTwitterSquare/></a></li>
                <li><a href="https://www.github.com/"><FaGithub/></a></li>
            </ul>
        </div>
    </div>
      )
    }

export default Footer;
