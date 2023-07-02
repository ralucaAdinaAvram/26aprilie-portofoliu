import React from 'react'
import { AiFillTwitterSquare} from "react-icons/ai";

import { BsEnvelopeFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import{AiFillFacebook} from "react-icons/ai";
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <div className="social_media_left">
    <div className="contact_social_media mobile">
        <div className="each_contact twitter"><AiFillTwitterSquare/></div>
    
    <div className="each_contact instagram"> <AiFillInstagram/></div>
   
    <div className="each_contact envelope"> <BsEnvelopeFill/></div>
   
    <div className="each_contact facebook"><AiFillFacebook/></div>
    
    
     </div>
     </div>
  )
}

export default SocialMedia