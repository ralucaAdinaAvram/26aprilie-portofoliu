import React,{useState} from 'react';
import {Link} from "react-router-dom";
import '../componentstechShop/NavbartechShop.css';
import { BiAnalyse } from "react-icons/bi";


const Navbar = () => {
  const[navbar, setNavbar]=useState(false);

  const changeBackground=()=>{
    if(window.scrollY >= 80){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    < >
    <div className="navbar-container">
   <nav className={navbar ?'navbar active':'navbar'} >
   
    <div className="logo">
      <p>TRL<BiAnalyse  className="logo-size"/></p>
    </div>
    
    <ul className="tabs">
            <Link to ="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/products"><li>Products</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </ul>
    
  
   </nav>
   
   </div>

        
    </>
  )
}

export default Navbar