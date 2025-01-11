import React from 'react'
import logo from "../assets/logo.png";
import { FaFacebook, FaTelegram, FaFacebookMessenger } from "react-icons/fa";

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
                <li><p>Address: 320 Lincoln Ave, Long Bien, Hanoi</p></li>
                <li><p>Phone: (01) 503-45-8377</p></li>
                <li><p>Email: quatre-crepes@email.com</p></li>
              </ul>
            </div>
            <div className="col l-0-1 l-5">
              <ul>
                <li><p>Opening hours: Mon - Sun: 2 PM - 10 PM</p></li>
                <li><p>Online service hours: Mon - Sun: 9 AM - 8 PM</p></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col l-0-1 l-1">
          <div className="row foot-social">
            <FaFacebook/>
            <FaTelegram/>
            <FaFacebookMessenger/>
          </div>
        </div>
      </div>
      <div className="row copy">
        <div className="foot-line"></div>
        <p>(C) Copyright 2024, Quatre-Crepes Hanoi.</p>
      </div>
      </div>
      <div className="copyright" style={{padding: "10px 10px", background: "var(--ac1)"}}>
        <p className='p0 wide' style={{textAlign: "right", color: "#fff"}}>Designed & Developed by Hynavera.</p>
      </div>
    </div>
  )
}

export default Footer