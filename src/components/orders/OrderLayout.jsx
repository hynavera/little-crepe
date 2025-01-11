import React from 'react'
import "./OrderLayout.css"
import { CgClose } from "react-icons/cg";
import { Outlet } from 'react-router-dom';

const OrderLayout = () => {
  return (
    <div className='order-layout'>
      <div className="close-icon row">
        <CgClose/>
      </div>
      <Outlet/>
    </div>
  )
}

export default OrderLayout