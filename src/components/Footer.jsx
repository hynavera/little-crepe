import React from 'react'
import logo from "../assets/logo-foot.png";
import { FaFacebook, FaTelegram, FaFacebookMessenger } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="copyright" style={{padding: "10px 10px", background: "var(--ac1)"}}>
        <p className='p0 wide' style={{textAlign: "center", color: "#fff"}}>Designed & Developed by Hynavera.</p>
      </div>
    </div>
  )
}

export default Footer