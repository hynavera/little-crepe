import React, {useState} from 'react';
import "./Home.css";
import "../components/landing/Landing.css"
import Hero from './landing/Hero';
import CustomMap from './landing/CustomMap';
import { APIProvider } from "@vis.gl/react-google-maps";
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

      <section className="about">
        <div className="wide">
          <div className="row">
            <div className="col l-0-1 l-8 p-4">
              <h2>F </h2>
              <h3>We </h3>
              <p> <br />
              We ar
              </p>
              <br />
            </div>
          </div>
        </div>
        <br />
        <div className="about-img">
          <img src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg" alt="" />
        </div>
      </section>
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
      <section className="faq wide faq-wide">
        <div className="row">
          <div className="col l-0-2 l-8 p-4">
            <h3>VISIT US</h3>
            <p className='p0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <div className="map">
              <APIProvider apiKey={'AIzaSyDTBdN8scOp2wngX5Eim0IbtpzYHgIUABY'} onLoad={() => console.log('Maps API has loaded.')}>
                <CustomMap />
              </APIProvider>
              <button id='map-btn'>Get Directions</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home