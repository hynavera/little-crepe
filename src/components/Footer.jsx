import React from 'react'
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="wide">
      <div className="row foot-back">
        <div className="col l-10">
          <div className='logo-footer'>
            <img src={logo} alt="" />
          </div>
          <div className="row">
            <div className="col l-0-1 l-5">
              <ul>
                <li>Address: 320 Lincoln Ave, Long Bien, Hanoi</li>
                <li>Phone: (01) 503-45-8377</li>
                <li>Email: quatre-crepes@email.com</li>
              </ul>
            </div>
            <div className="col l-0-1 l-5">
              <ul>
                <li>Opening hours: Mon - Sun: 2 PM - 10 PM</li>
                <li>Online service hours: Mon - Sun: 9 AM - 8 PM</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col l-0-1 l-1">
          FB TL WA
        </div>
      </div>
      <div className="row copy">
        <div className="foot-line"></div>
        <p>(C) Copyright 2024, Quatre-Crepes Hanoi.</p>
      </div>
      </div>
    </div>
  )
}

export default Footer