import React from 'react'
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { useState } from "react";


const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className='header'>
      <nav className="navbar">
        <ul>
          <li onClick={checkHandler}>
            <Link to="/">OUR MENU</Link>
          </li>
          <li onClick={checkHandler}>
            <Link to="/">OUR STORY</Link>
          </li>
          <li onClick={checkHandler}>
            <Link to="/">EVENTS</Link>
          </li>
          <li className='logo-header'>
            <Link to="/">
            <div>
              <img src={logo} alt="" />
            </div>
            </Link>
          </li>
          <li onClick={checkHandler}>
            <Link to="/">ORDERS</Link>
            </li>
          <li onClick={checkHandler}>
            <Link to="/">RESERVATIONS</Link>
          </li>
          <li onClick={checkHandler}>
            <Link to="/">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar