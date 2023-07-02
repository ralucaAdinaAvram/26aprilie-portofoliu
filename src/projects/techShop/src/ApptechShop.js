import React, {useState} from 'react';

import HometechShop from './componentstechShop/HometechShop';




function AppTechShop() {
  const [openModal, setOpenModal]= useState(false);

  return (
   <div>
    
     
   <HometechShop />
  
   </div>
  )
}

export default AppTechShop;
