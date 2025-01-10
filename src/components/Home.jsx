import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div className=''>
      <div className="hero wide">
        <div className="row">
          <div className="col l-6 hero-img">
            <img src="https://firebasestorage.googleapis.com/v0/b/huyennguyen-dev.appspot.com/o/Coding%2FQuatre-Crepes%2FProperty%201%3Dh3.png?alt=media&token=0194ba1b-8e24-4035-8870-111234834154" alt="" />
          </div>
          <div className="col l-0-1 l-4 hero-menu">
            <h4>CREPES DAY</h4>
            <h1>Savory galettes <br />& sweets</h1>
            <p>Enjoy unique crepes based on French recipes at a classic restaurant on the banks of the Red River, right in the heart of the capital Hanoi.
            </p>
            <div className="row hero-circle-row">
              <div className="hero-circle">
                <img src="https://images.unsplash.com/photo-1667902687249-0dfe266a3b2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className="hero-circle">
                <img src="https://images.unsplash.com/photo-1609501885647-9cf9deffdb23?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className="hero-circle">
                <img src="https://images.unsplash.com/photo-1582995570162-9dee25247fda?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="wide">
          <div className="row">
            <div className="col l-0-1 l-7">
              <h1>FRENCHIEE-NOUS</h1>
              <p>
              Lorem ipsum dolor sit amet, consecte tur adipis cing elit, sed do eiusmod tempor incididu nt  Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusm od. Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="about-img">
          <img src="https://cdn.pixabay.com/photo/2025/01/10/08/05/08-05-31-202_960_720.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home