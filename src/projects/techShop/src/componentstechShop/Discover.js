import React from 'react'
import {Link} from 'react-router-dom';
import'../componentstechShop/Discover.css';
import {BsCaretRightFill} from "react-icons/bs";


function Discover() {
  return (
    <>
    <div className='discover-container'> 
    
     <div className='discover-content'>
        
        <p>Discover... Techonology...  Ideas...</p>
         <Link to="/.Technology"><button>Shop the lastest devices <BsCaretRightFill /></button></Link>
     </div>
      <div className='image'></div>
    </div>
    </>
  )
}

export default Discover
