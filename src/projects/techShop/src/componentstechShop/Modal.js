import React from 'react'
import '../componentstechShop/Modal.css';


function Modal({open, onClose}) {
    if(!open) return null
  return (
    <div className='overlay'>
    
    <div>
    <p onClick={onClose} className="closeBtn">X</p>
     <div className="content">
        <p>20% discount for any purchase higher than £500  </p>
        <h2>VOUCHER CODE: VOUCH20</h2>
     
     
    </div>
    </div>
    { }
    </div>
  )
}

export default Modal