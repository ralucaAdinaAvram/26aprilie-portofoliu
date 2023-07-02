import React from 'react'

import './Portofolio.css';
import Flowers from '../assests/flowers.webp';
import Calc from '../assests/calc.jpg';
import Four from '../assests/Four.jpg';
import ApptechShop from '../projects/techShop/src/ApptechShop';
import { useNavigate } from "react-router-dom";



const Portofolio = () => {
  const navigate = useNavigate();
  return (
    <div className="portofolioCointainer">
      <div className="project">
        <div className="projectCard">
        
          <div className="projectImg">
            <img src={Flowers} alt=""/>
          </div>

          <div className="projectName">
           <button>Flowers Shop</button>
          </div>
        </div>

        <div className="projectCard">
          <div className="projectImg">
            <img src={Calc} alt=""/>
          </div>
          <div className="projectName">
          <button onClick={() => navigate('/ApptechShop')}>tech store</button>

           { /*<AppTechShop
              src={AppTechShop}
              text='Tech Shop'
              label='techShop'
              path='/AppTechShop'
  />*/}
          </div>
        </div>

        <div className="projectCard">
          <div className="projectImg">
            <img src={Four} alt=""/>
          </div>
          <div className="projectName">
          <button>The Pub</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Portofolio