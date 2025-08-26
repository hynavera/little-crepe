import React, {useState} from 'react';
import "./Home.css";
import "../components/landing/Landing.css"
import Hero from './landing/Hero';
import { useNavigate, Outlet } from 'react-router-dom'; 
import { CgClose } from "react-icons/cg";
import { FiChevronsRight } from "react-icons/fi";

const Home = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();
  const handleOrderClick = () => {
    navigate('/order');
    setOpenPopup(true);
  };
  const handleCloseModal = () => {
    navigate('/');
    setOpenPopup(false);
  }
  
  return (
    <div className=''>
      <Hero/>

      <section className="order">
        <div className="wide">
        <div className="row order-row">
          <div className="col l-4 p-4 hero-menu">
            <h4>ORDER ONLINE</h4>
            <p>
            Lorem ipsum dolor sit amet, consecte tur adipis cing elit, sed do eiusmod tempor incididu nt  Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusm od.
            </p>
            <div className="row">
              <button className='btn1 col l-6 p-2' onClick={handleOrderClick}>Order Now</button>
            </div>
          </div>
        </div>
        {openPopup ? (
          <div className="modal-container">
            <div className="order-layout">
              <div className="close-icon row">
                <CgClose  onClick={handleCloseModal} style={{cursor: "pointer"}}/>
              </div>
              <Outlet/>
            </div>
          </div>
        ) : ("")}
        </div>
      </section>
    </div>
  )
}

export default Home