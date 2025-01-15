import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, clearCart } from './cartSlice';
import Popup from 'reactjs-popup';
import DishItem from './DishItem';


const Customize = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  // const dispatch = useDispatch();
  // const handleRemove = (dish) => {
  //   dispatch(removeItemFromCart(dish));
  // };
  // const handleIncrement = (item) => {
  //   dispatch(increaseItemQuantity(item));
  // };
  // const handleDecrement = (item) => {
  //  dispatch(decreaseItemQuantity(item));
  // };
  // const handleClearCart = () => {
  //   dispatch(clearCart());
  // };

  return (
    <div className='order-wide'>
      <section className="crepe-layout">
        <div className="crepe-type">
          <div className="row">
            <div className="col l-12">
              <h3>Your Order</h3>
            </div>
          </div>
        <div className="row dish-row">
          {cartItems.map((item) => (
          <div key={item.name} className="col l-3 dish-card-lt">
          <div className="dish-card">
            <div className="card-linear"></div>
            <div className="dimage">
              <img src={item.image} alt="" />
            </div>
            <div className="dish-info">
              <div className="dish-name">
                <div className='dname'>{item.name}</div>
                <p className="p0 dabout">{item.about}</p>
              </div>
              <div className="row dish-add">
                <div className="row dish-price">
                  <p className="p1">$</p>
                  <div className="dprice">{item.price}</div>
                </div>
                <div className="add-btn">
                <Popup trigger={
                    <button className="btn2">
                      x {item.quantity}
                    </button>
                }
                >
                  <div className="popup-container">
                    <DishItem {...item} key={item.name}/>
                  </div>
                </Popup>
                </div>
                {/* <div className="add-btn">
                  <div className="row">
                    <button onClick={() => handleDecrement(item.name)}>-</button>
                    <button onClick={() => handleIncrement(item.name)}>+</button>
                    <button onClick={() => handleRemove(item.name)}>Remove</button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          </div>
          ))}
        </div>
        </div>
      </section>
    </div>
  )
}

export default Customize