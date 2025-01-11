import React, {useEffect, useState} from 'react'
import { FaAngleRight } from "react-icons/fa6";

const NewOrder = () => {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    fetch('/api/dishes')
    .then(res => res.json())
    .then((data => setDishes(data.dishes)))
  }, [])

  return (
    <div className='order-wide'>
      <div className="new-order">
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
          <div className="col l-8">
            <h4>We serve a fresh, handcrafted and heartfelt experience 
            on every plate.</h4>
          </div>
        </div>
      </div>
      <section className="crepe-layout">
        <div className="crepe-type">
          <div className="row">
            <div className="col l-12">
              <h3>Menu Suggestion</h3>
            </div>
          </div>
          <div className="row dish-row">
          {dishes.map(dish => (
          <div key={dish.name} className="col l-3 dish-card-lt">
            <div className="dish-card">
              <div className="dimage">
                <img src={dish.image} alt="" />
              </div>
              <div className="dish-info">
                <div className="dish-name">
                  <div className='dname'>{dish.name}</div>
                  <p className="p0 dabout">{dish.about}</p>
                </div>
                <div className="row dish-add">
                  <div className="row dish-price">
                    <p className="p1">$</p>
                    <div className="dprice">{dish.price}</div>
                  </div>
                  <div className="add-btn">
                    <button className='btn1'>Add</button>
                  </div>
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

export default NewOrder