import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Location = () => {
  return (
    <div className='order-wide'>
    <div className="place-order">
      <div className="col l-12">
        <h2>Place a new order online</h2>
        <h4>Enter your location to see if we cater to your area</h4>
      </div>
      <div className="row odlt-input">
        <div className="col l-4 order-input">
          <input type="text" placeholder='City/province/state' />
        </div>
      </div>
    </div>
    <div className="hr"></div>
    <hr />
    <div className="hr"></div>
    <div className="place-order">
      <div className="col l-12">
        <h2>Review your order</h2>
        <h4>Enter order and phone number to check your order status</h4>
      </div>
      <div className="row odlt-input">
        <div className="col l-4 order-input">
          <input type="text" placeholder='Order number' />
        </div>
        <div className="col l-4 order-input">
          <input type="text" placeholder='Phone number' />
        </div>
      </div>
      <div className="row odlt-btn">
        <div className="col l-3">
          <button className='btn1'>Check order status</button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Location