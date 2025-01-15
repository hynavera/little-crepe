import React from 'react'
import "./DishPopup.css"
import { useSelector, useDispatch } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity} from './cartSlice';
import Cart from './Cart';

const DishItem = ({name, image, about, price, quantity}) => {
  const dispatch = useDispatch();
  const handleIncrement = (item) => {
    dispatch(increaseItemQuantity(item));
  };
  const handleDecrement = (item) => {
   dispatch(decreaseItemQuantity(item));
  };

  return (
    <div className='order-layout'>
      <div className="order-wide">
        <div className="row cart-popup">
          <Cart/>
        </div>
        <div className="row">
          <div className="col l-5">
            <div className="pimage">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="col l-5 pinfo">
            <h2>{name}</h2>
            <p>{about}</p>
            <div className="row pquantity">
              <h4>Quantity:</h4>
              <div className="row">
                <button onClick={() => handleDecrement(name)}>-</button>
                <div>{quantity}</div>
                <button onClick={() => handleIncrement(name)}>+</button>
              </div>
            </div>
            <div className="padd">
              <h4>Add more:</h4>
              <div className="row">
                <input type="checkbox" name="dress" id="" />
                <label htmlFor="">Salad dressing</label>
              </div>
              <div className="row">
                <input type="checkbox" name="sauce" id="" />
                <label htmlFor="">Hot sauce</label>
              </div>
              <div className="row">
                <input type="checkbox" name="cream" id="" />
                <label htmlFor="">Mix cheese/whipped cream</label>
              </div>
            </div>
          </div>
          <div className="col l-2">
            <div className="row pprice">
              <p className="p1">USD</p>
              <h4>{price}</h4>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default DishItem