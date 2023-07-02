import React from 'react';
import './ZoomImages.css';
import {Link} from 'react-router-dom';



function ZoomImages() {
  return (
    <>
    <div className="Zoom-images">

       <div className="text">
          <h3>You have the ideas! </h3>
          <h2>We have the technology !</h2> 
       
      </div>
    
        
 
       <div className="images-section">
          <div className="card">
            <div className="card-image headphones"></div>
              <h2>High Quality Technology</h2>
               <Link to="/.Technology"><button>Get creative!</button></Link>
           </div>

            <div className="card">
              <div className="card-image tablet"></div>
              <h2>High Speed Technology</h2>
               <Link to="/.Technology"><button>Do the hard-work!!</button></Link>
            </div>

            <div className="card">
              <div className="card-image watch"></div>
              <h2>Fast tracking technology</h2>
              <Link to="/.Technology"><button>Always know where you stand !</button></Link>
            </div>
        
        </div>

    </div>
    </>
  )
}



export default ZoomImages