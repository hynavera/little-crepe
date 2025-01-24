import React from 'react'
import "./DishPopup.css"
import { useSelector, useDispatch } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } from './cartSlice';
import Cart from './Cart';

const DishItem = ({name, image, about, price, quantity}) => {
  const dispatch = useDispatch();
  
  const handleIncrement = (item) => {
    dispatch(increaseItemQuantity(item));
  };
  const handleDecrement = (item) => {
   dispatch(decreaseItemQuantity(item));
  };
  const handleRemove = (item) => {
    dispatch(removeItemFromCart(item));
  };

  return (
    <div className='order-layout'>
      <div className="order-wide">
        <div className="row cart-popup">
          <Cart/>
        </div>
        <div className="row pdish">
          <div className="col l-5 p-4">
            <div className="pimage">
              <img src={image} alt="" />
            </div>
            <div className='premove'>
              <button className="btn1" onClick={() => handleRemove(name)}>Remove</button>
            </div>
          </div>
          <div className="col l-5 p-4 pinfo">
            <div>
              <h2>{name}</h2>
              <p>{about}</p>
            </div>
            <div className="row pquantity">
              <h4>Quantity:</h4>
              <div className="row">
                <button className='btn1' onClick={() => handleDecrement(name)}>-</button>
                <h4>{quantity}</h4>
                <button className='btn1' onClick={() => handleIncrement(name)}>+</button>
              </div>
            </div>
            <div className="padd">
              <h4>Add more:</h4>
              <label>
                <input type="checkbox" name="dress" id="" />
                <span htmlFor="">Salad dressing</span>
              </label>
              <label>
                <input type="checkbox" name="sauce" id="" />
                <span htmlFor="">Hot sauce</span>
              </label>
              <label>
                <input type="checkbox" name="cream" id="" />
                <span htmlFor="">Mix cheese/whipped cream</span>
              </label>
            </div>
          </div>
          <div className="col l-2 p-0-2 p-2">
            <div className="row pprice">
              <p className="p1">USD</p>
              <h4>{price}</h4>
            </div>
          </div>
        </div>
        <div className="row" style={{justifyContent: "flex-end"}}>
          <p className='p0'>Click outside to continue</p>
        </div>
      </div>
      
    </div>
  )
}

export default DishItem