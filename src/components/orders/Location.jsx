import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaCheck, FaXmark } from "react-icons/fa6";

const Location = () => {

  const [place, setPlace] = useState('');
  const [check, setCheck] = useState(0);
  const handleChange = (e) => {
    const newPlace = e.target.value;
    setPlace(newPlace);
    if (newPlace.toLowerCase().includes('hanoi')) {
      setCheck(1);
    } else if (newPlace !== '') {
      setCheck(2);
    } else {
      setCheck(0);
    }
  }

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/order/new-order");
  }

  return (
    <div className='order-wide'>
    <div className="place-order">
      <div className="row">
        <div className="col l-12 p-4">
          <h2>Place a new order online</h2>
          <h4>Enter your location to see if we cater to your area</h4>
        </div>
      </div>
      <div className="row odlt-input">
        <div className="col l-4 p-4 order-input">
          <input type="text" placeholder='City/province/state' 
            value={place} onChange={handleChange}
          />
        </div>
        {(check == 1) ? (
        <div className="col l-8 p-4">
          <div className="row">
            <FaCheck className='check-btn'/>
            <h4>Yes, we can deliver to your location!</h4>
          </div>
        </div>
        ) : ("")}
        {(check == 2) ? (
          <div className="col l-8 p-4">
          <div className="row">
            <FaXmark className='check-btn'/>
            <h4>Unfortunately, we cannot deliver to your place!</h4>
          </div>
        </div>
        ) : ("")}
      </div>
      {(check == 1) && (
      <div className="row odlt-btn">
          <div className="col l-3 p-2">
            <button className='btn1' onClick={handleSubmit}>Continue</button>
          </div>
        </div>
        )}
    </div>
    <div className="hr"></div>
    <div className="col l-12 p-4"><hr /></div>
    <div className="hr"></div>
    <div className="place-order">
      <div className="row">
        <div className="col l-12 p-4">
          <h2>Review your order</h2>
          <h4>Enter order and phone number to check your order status</h4>
        </div>
      </div>
      <div className="row odlt-input">
        <div className="col l-4 p-4 order-input">
          <input type="text" placeholder='Order number' />
        </div>
        <div className="col l-4 p-4 order-input">
          <input type="text" placeholder='Phone number' />
        </div>
      </div>
      <div className="row odlt-btn">
        <div className="col l-3 p-2">
          <button className='btn1'>Check order status</button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Location