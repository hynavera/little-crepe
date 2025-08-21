import React from 'react'
import logo from "../assets/logo.png";
import logoFoot from "../assets/logo-foot.png";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FaFacebook, FaTelegram, FaFacebookMessenger } from "react-icons/fa";


const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className='header'>
      <nav className="navbar">
        <ul>
          <li className='logo-header'>
            <Link to="/">
            <div>
              <img src={logo} alt="" />
            </div>
            </Link>
          </li>
          <li onClick={checkHandler}>
            <Link to="/our-menu">OUR MENU</Link>
          </li>
          <li onClick={checkHandler}>
            <Link to="/our-story">OUR STORY</Link>
          </li>
          <li onClick={checkHandler}>
            <Link to="/events">EVENTS</Link>
          </li>
          <li onClick={checkHandler}>
            <Link to="/contact-us">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar">
        <input type="checkbox" id="check" checked={isChecked} onChange={checkHandler}/>
        <div className='logo-header'>
            <Link to="/">
            <div>
              <img src={logo} alt="" />
            </div>
            </Link>
        </div>
        <label htmlFor="check" className="side_menu">
          <FaBars id="menu-icon"/>
          <FaXmark id='close-icon'/>
        </label> 
        <nav className='side_nav'>
          <ul>
            <li onClick={checkHandler}>
              <Link to="/">HOME</Link>
            </li>
            <li onClick={checkHandler}>
              <Link to="/">OUR MENU</Link>
            </li>
            <li onClick={checkHandler}>
              <Link to="/">OUR STORY</Link>
            </li>
            <li onClick={checkHandler}>
              <Link to="/">EVENTS</Link>
            </li>
            <li onClick={checkHandler}>
              <Link to="/">CONTACT</Link>
            </li>
          </ul>
          <div className='side_foot'>
            <div className="row foot-back">
              <div className="col p-4">
                <div className='logo-footer'>
                  <img src={logoFoot} alt="" />
                </div>
                <ul>
                  <li><p>Address: 320 Lincoln Ave, Long Bien, Hanoi</p></li>
                  <li><p>Phone: (01) 503-45-8377</p></li>
                  <li><p>Email: quatre-crepes@email.com</p></li>
                </ul>
                <ul>
                  <li><p>Opening hours: Mon - Sun: 2 PM - 10 PM</p></li>
                  <li><p>Online service hours: Mon - Sun: 9 AM - 8 PM</p></li>
                </ul>
              </div>
              <div className="col p-4">
                <div className="row foot-social">
                  <FaFacebook/>
                  <FaTelegram/>
                  <FaFacebookMessenger/>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar