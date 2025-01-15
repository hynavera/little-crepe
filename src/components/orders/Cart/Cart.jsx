import React, {useState, useEffect} from 'react'
import cartImg from '../../../assets/cart.svg'
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const cartNum = useSelector(store => store.cart.cartItems);

  useEffect(() => {
    let totalNum = 0;
    cartNum.forEach(item => totalNum += item.quantity);
    setTotalQuantity(totalNum);  
  }, [cartNum]);
  // console.log(cartNum.length);

  return (
              <div className="cart">
                <img src={cartImg} alt="" />
                <div className="cart-num">{totalQuantity}</div>
              </div>
  )
}

export default Cart