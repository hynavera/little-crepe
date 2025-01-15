import React, {useState, useEffect} from 'react'
import "./OrderLayout.css"
import { CgClose } from "react-icons/cg";
import { Outlet, useLocation } from 'react-router-dom';
import cartImg from "../../assets/cart.svg"
import { FaAngleRight } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";


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

  const [totalQuantity, setTotalQuantity] = useState(0);
  const cartNum = useSelector(store => store.cart.cartItems);
  
  const [totalAmount, setTotalAmount] = useState(0);
  const cartCost = useSelector(state => state.cart.cartItems);
  
  useEffect(() => {
    let totalNum = 0;
    cartNum.forEach(item => totalNum += item.quantity);
    setTotalQuantity(totalNum);  
    
    // Calculate total amount for all products in the cart
    let totalCost = 0;
    cartCost.forEach(item => {
      totalCost += item.price * item.quantity;
    });
    setTotalAmount(totalCost);
  }, [cartNum]);
  // console.log(cartNum.length);

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
                <div className="cart-num">{totalQuantity}</div>
              </div>
            </div>
            <div className="col l-0-3 l-4">
              <div className="row p-amount">
                <h4>Total Amount (USD)</h4>
                <h4>{totalAmount}</h4>
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