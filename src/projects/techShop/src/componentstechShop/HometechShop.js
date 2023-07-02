import React, {useState} from 'react'
import HeroSection from '../componentstechShop/HeroSection.js';
import ZoomImages from './ZoomImages.js';

import Navbar from './NavbartechShop.js';
import '../componentstechShop/HometechShop.css';
import Footer from './Footer.js';
import Modal from './Modal.js'
import Discover from './Discover.js'






function HometechShop() {

  const[modal, setModal]=useState(true);
  const toggleModal = ()=>{
      setModal(false)
  }

  return (
   <>
   <div
    onClick={toggleModal}
    className="btn-modal"
   >
   
    <Navbar />
   <HeroSection />
   <ZoomImages />
   <Discover />
   <Footer />
   
   </div>

   {modal && 
     (<div className="modal">
        <div 
        onClick={toggleModal} 
        className="overlay">
        <div className="modal-content" >
           <Modal open={modal} />
            {/* <button
            className='close-modal'
            onClick={toggleModal}
            >X</button> */}
            </div> 
        </div>
     </div>
     )}

   </>
  )
}

export default HometechShop