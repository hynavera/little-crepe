import React, {useEffect, useState} from 'react'
import { FaAngleRight } from "react-icons/fa6";

const NewOrder = () => {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/cbab319f8372ce70638e")
    .then(res => res.json())
    .then((data => setDishes(data)))
  }, [])

  return (
    <div className='order-wide'>
      <div className="new-order">
        <div className="row">
          <div className="col l-9">
            <h4>We serve a fresh, handcrafted and heartfelt experience 
            on every plate.</h4>
          </div>
        </div>
      </div>
      <section className="crepe-layout">
        {dishes.map((category, index) => (
        <div className="crepe-type" key={index}>
        <div className="row">
          <div className="col l-12">
            <h3>{category.category}</h3>
          </div>
        </div>
        <div className="row dish-row">
        {category.crepes.map((dish) => (
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
      ))}
      </section>
    </div>
  )
}

export default NewOrder