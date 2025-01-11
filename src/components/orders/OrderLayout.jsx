import React from 'react'
import "./OrderLayout.css"
import { CgClose } from "react-icons/cg";
import Location from './Location';

const OrderLayout = () => {
  return (
    <div className='order-layout'>
      <div className="close-icon row">
        <CgClose/>
      </div>
      <Location/>
    </div>
  )
}

export default OrderLayout