import React, {useState} from 'react';
import "./Home.css";
import Hero from './landing/Hero';
import Review from './landing/Review';
import Faq from './landing/Faq';
import CustomMap from './landing/CustomMap';
import { APIProvider } from "@vis.gl/react-google-maps";
import { useNavigate, Outlet } from 'react-router-dom'; 
import { CgClose } from "react-icons/cg";


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
            <div className="col l-0-1 l-7">
              <h1>FRENCHIEE-NOUS</h1>
              <p>
              Lorem ipsum dolor sit amet, consecte tur adipis cing elit, sed do eiusmod tempor incididu nt  Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusm od. Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
              <br />
              Lorem ipsum dolor sit amet, consecte tur adipis cing elit, sed do eiusmod tempor incididu nt  Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusm od. Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="about-img">
          <img src="https://cdn.pixabay.com/photo/2025/01/10/08/05/restaurant-9323426_960_720.jpg" alt="" />
        </div>
      </section>
      <section className="order">
        <div className="wide">
        <div className="row">
          <h3 className='col l-12 order-testi'>DINERS SAY ABOUT US</h3>
          <Review/>
          </div>
        <div className="row order-row">
          <div className="order-img">
            <img src="https://cdn.pixabay.com/photo/2025/01/10/09/07/crepes-9323494_1280.png" alt="" />
          </div>
          <div className="col l-0-7 l-4 hero-menu">
            <h4>ORDER ONLINE</h4>
            <h1>“Paris-outdoors to your home”</h1>
            <p>
            Lorem ipsum dolor sit amet, consecte tur adipis cing elit, sed do eiusmod tempor incididu nt  Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusm od.
            </p>
            <div className="row">
              <button className='btn1 col l-6' onClick={handleOrderClick}>Order Now</button>
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
      <section className="events">
        <div className="wide">
          <div className="row order-row">
            <div className="col l-0-1 l-4 hero-menu">
              <h4>EVENTS</h4>
              <h1>“Dinning through the night!”</h1>
              <p>
              Lorem ipsum dolor sit amet, consecte tur adipis cing elit, sed do eiusmod tempor incididu nt  Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusm od.
              </p>
              <div className="row">
                 <button className='btn2 col l-6'>Book a Table</button>
              </div>
            </div>
            <div className="order-img">
              <img src="https://cdn.pixabay.com/photo/2016/11/23/13/45/celebration-1852926_960_720.jpg" alt="" id='ev-im1' />
              <img src="https://cdn.pixabay.com/photo/2025/01/10/10/51/crepe-9323695_1280.png" alt="" id='ev-im2'/>
            </div>

          </div>
        </div>
      </section>
      <section className="faq wide faq-wide">
        <div className="row">
          <div className="col  l-0-2 l-8">
            <h3>FAQ</h3>
            <p className='p0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <Faq/>
          </div>
        </div>    
        <div className="row">
          <div className="col l-0-2 l-8">
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