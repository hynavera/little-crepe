import React, {useState, useEffect} from 'react'
import "./OrderLayout.css"
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import Cart from './Cart/Cart';


const OrderLayout = () => {
  const [showPay, setShowPay] = useState(false);
  const [NavCart, setNavCart] = useState(1);

  const location = useLocation();
  // console.log(location);
  useEffect(() => {
    if (location.pathname !== '/order' && location.pathname !== '/order/status') {
      setShowPay(true);
    } else {
      setShowPay(false);
    }
    if (location.pathname === '/order/customize') {
      setNavCart(2);
    } else {
      setNavCart(1);
    }
  })

  const [currentStep, setCurrentStep] = useState(1);

  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/order/customize');
    setCurrentStep(1);
  }
  const handleNextPay = () => {
    navigate('/order/payinfo');
    setCurrentStep(2);
  }
  const handlePayment = () => {
    navigate('/order/confirm');
    setCurrentStep(3);
  }
  const handleConfirm = () => {
    navigate('/order/status');
  }


  const NavPayDisplay = () => {
    if (location.pathname === '/order/new-order' || location.pathname === '/order/customize') {
      return <>
      <div className="pay-order">
        <div className="order-wide">
          <div className="row">
            <div className="col l-2">
              <Cart/>
            </div>
            <div className="col l-0-3 l-4">
              <div className="row p-amount">
                <h4>Total Amount (USD)</h4>
                <h4>{totalAmount}</h4>
              </div>
            </div>
            <div className="col l-3">
              {NavCart === 1 && <button className="btn2" onClick={handleNext}>Go to Cart</button>}
              {NavCart === 2 && <button className="btn2" onClick={handleNextPay}>Go to Checkout</button>}
            </div>
          </div>
        </div>
      </div> </>
    } else if (location.pathname === '/order/payinfo') {
      return <>
      <div className="pay-order">
        <div className="order-wide">
          <div className="row" style={{justifyContent: "space-between"}}>
            <div className="col l-3">
              <button className="btn2" onClick={handleNext}>Back to Cart</button>
            </div>
            <div className="col l-3">
              <button className="btn2" onClick={handlePayment}>Go to Payment</button>
            </div>
          </div>
        </div>
      </div></>
    } else if (location.pathname === '/order/confirm') {
      return <>
      <div className="pay-order">
        <div className="order-wide">
          <div className="row">
            <div className="col l-3">
              <button className="btn2" onClick={handleNextPay}>Back to Payment</button>
            </div>
            <div className="col l-0-2 l-4">
              <p className='p1' style={{color: "var(--n0)"}}>By clicking ‘Confirm’, you agree to the restaurant's payment regulations.</p>
            </div>
            <div className="col l-3">
              <button className="btn2" onClick={handleConfirm}>Confirm Order</button>
            </div>
          </div>
        </div>
      </div></>
    } 
  }
  
  const [totalAmount, setTotalAmount] = useState(0);
  const cartCost = useSelector(state => state.cart.cartItems);
  
  useEffect(() => {
    let totalCost = 0;
    cartCost.forEach(item => {
      totalCost += item.price * item.quantity;
    });
    setTotalAmount(totalCost);
  }, [cartCost]);

  return (
    <div>
      {showPay && (
        <div className='order-title'>
        <div className="order-wide">
          <div className="row">
            <div className="col l-12 new-title">
              <h4>ORDER ONLINE</h4>
              <div className="row">
                <div className={`flow step${currentStep}`}>Customize Menu</div>
                <FaAngleRight/>
                <div className={`flow ${currentStep === 2 || currentStep === 3 ? 'step2' : ''}`}>Order Information & Payment</div>
                <FaAngleRight/>
                <div className={`flow ${currentStep === 3 ? 'step3' : ''}`}>Delivery Confirmation</div>
              </div>
            </div> 
          </div>
        </div>
      </div>
      )}
      <Outlet/>
      <NavPayDisplay/>

    </div>
  )
}

export default OrderLayout
