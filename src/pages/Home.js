import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css';





const Home = () => {
  return (
    <div className="container-home">
       
        <div className="landing">
            <div className="presentation">
                <h1 >Hi, my name is </h1>
                <p>Adina Avram</p>
                <p></p>
                <p>I am a selft-taught front end web developer.</p>
                <p>I have taught myslef to do web pages, without having any preparation.
            </p>
            <p>Please have a look around and let me know if I can work for your company.</p>
            </div>
            <div className="button">
          <Link to="/portofolio"><button>View Portofolio</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Home