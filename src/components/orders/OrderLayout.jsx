import React, {useState, useEffect} from 'react'
import "./OrderLayout.css"
import { CgClose } from "react-icons/cg";
import { Outlet, useLocation } from 'react-router-dom';
import cartImg from "../../assets/cart.svg"
import { FaAngleRight } from "react-icons/fa6";


const OrderLayout = () => {
  const [showPay, setShowPay] = useState(false);
  const location = useLocation();
  // console.log(location);
  
  useEffect(() => {
    if (location.pathname !== '/order') {
      setShowPay(true);
    } else {
      setShowPay(false);
    }
  })

  return (
    <div className='order-layout'>
      <div className="close-icon row">
        <CgClose/>
      </div>
      {showPay && (
        <div className='order-title'>
        <div className="order-wide">
          <div className="row">
            <div className="col l-12 new-title">
              <h4>ORDER ONLINE</h4>
              <div className="row">
                <div className="sta1">Customize Menu</div>
                <FaAngleRight/>
                <div className="sta2">Order Information & Payment</div>
                <FaAngleRight/>
                <div className="sta3">Delivery Confirmation</div>
              </div>
            </div> 
          </div>
        </div>
      </div>
      )}
      <Outlet/>
      {showPay ? (
      <div className="pay-order">
        <div className="order-wide">
          <div className="row">
            <div className="col l-2">
              <div className="cart">
                <img src={cartImg} alt="" />
                <div className="cart-num">10</div>
              </div>
            </div>
            <div className="col l-0-3 l-4">
              <div className="row p-amount">
                <h4>Total Amount (USD)</h4>
                <h4>0</h4>
              </div>
            </div>
            <div className="col l-3">
              <button className="btn2">Go to Cart</button>
            </div>
          </div>
        </div>
      </div>
      ) : ("")}

    </div>
  )
}

export default OrderLayout