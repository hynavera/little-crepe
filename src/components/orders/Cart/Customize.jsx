import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from './cartSlice';
// import { clearCart } from './cartSlice';
import Popup from 'reactjs-popup';
import DishItem from './DishItem';


const Customize = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  
  const dispatch = useDispatch();
  const handleAddToCart = (dish) => {
    dispatch(addItemToCart(dish));
    console.log(dish.name);
  };
  const handleRemoveFromCart = (dish) => {
    dispatch(removeItemFromCart(dish));
    console.log(dish, "remove");
  }
  // const handleClearCart = () => {
  //   dispatch(clearCart());
  // };

  const [dishes, setDishes] = useState([]);
  // const [randomDish, setRandomDish] = useState({
  //   nameRd: "", imageRd: "", aboutRd: "", priceRd: ""
  // })
  const [randomDishes, setRandomDishes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.npoint.io/cbab319f8372ce70638e');
        const data = await response.json();

        if (data) {
          const filteredDishes = data.filter(
            (item) => item.category === 'Savory Galettes' || item.category === 'Sweet Crepes'
          );
          setDishes(filteredDishes.map((item) => item.crepes)); // Extract only the 'crepes' arrays
        } else {
          console.error('Error fetching data or invalid data structure.');
        }
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };
    fetchData();
  }, []);  

  useEffect(() => {
    if (dishes.length > 0) {
      // getRandom(); 
      getRandomDishes();
    }
  }, [dishes]); 

    // const getRandom = () => {
    //   if (dishes.length === 0) return; // Exit early if dishes is empty
    //   const randomDishIndex = Math.floor(Math.random() * dishes.flat().length); // Combine all crepes arrays
    //   const selectedDish = dishes.flat()[randomDishIndex]; // Select a random dish from the combined array   
    //   setRandomDish({
    //     nameRd: selectedDish.name,
    //     imageRd: selectedDish.image,
    //     aboutRd: selectedDish.about,
    //     priceRd: selectedDish.price,
    //   });
    // };  
    const getRandomDishes = () => {
      const allCrepes = dishes.flat(); 
      const uniqueIndices = new Set(); 
      while (uniqueIndices.size < 6) {
        uniqueIndices.add(Math.floor(Math.random() * allCrepes.length));
      }
      const selectedDishes = Array.from(uniqueIndices).map((index) => allCrepes[index]);
      setRandomDishes(selectedDishes);
    };

  return (
    <div className='order-wide'>
      <section className="crepe-layout">
        <div className="crepe-type">
          <div className="row">
            <div className="col l-12 p-4">
              <h3>Your Order</h3>
            </div>
          </div>
        <div className="row dish-row">
          {cartItems.map((item) => (
          <div key={item.name} className="col l-3 p-2 dish-card-lt">
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
                <Popup
                  trigger={
                    <button className="btn2">
                      x {item.quantity}
                    </button>
                } modal
                >
                  <div className="popup-container">
                    <DishItem {...item} key={item.name}/>
                  </div>
                </Popup>
                </div>
              </div>
            </div>
          </div>
          </div>
          ))}
        </div>
        </div>
      </section>
      <hr />
      <section className="crepe-layout">
        <div className="crepe-type">
          <div className="row">
            <div className="col l-12 p-4">
              <h3>Other Suggestion</h3>
            </div>
          </div>
        <div className="row dish-row">
              {/* <div className="dish-name">
                <div className='dname'>{randomDish.nameRd}</div>
                <p className="p0 dabout">{randomDish.aboutRd}</p>
              </div> */}
        {randomDishes.map((dish, index) => (
        <div key={index} className="col l-3 p-2 dish-card-lt">
          <div className="dish-card">
            <div className="card-linear"></div>
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
                  {cartItems.some((item) => item.name === dish.name) ? (
                    <button className='btn2' onClick={() => handleRemoveFromCart(dish.name)}>Remove</button>
                  ) : (
                    <button className='btn1' onClick={() => handleAddToCart(dish)}>Add</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
        </div>
        <br />
        <div className="row">
          <div className="col l-3 p-4">
            <button className="btn1">View All Menu</button>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Customize