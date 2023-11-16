import React from 'react'
import './Navbar.css';
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsFacebook,BsInstagram,BsLinkedin,BsYoutube,BsTwitter } from "react-icons/bs";




export const NavbarTop = () => {
  return (
    <div className='navbar-top'>
        <div className="contact">
            <div className="email"> <FaRegEnvelope />laizuakram98@gmail.com</div>
            <div className="address"><IoLocationOutline />Dhaka,Bangladesh</div>
        </div>
        <div className="social-icons">
            <BsFacebook />
            <BsInstagram />
            <BsLinkedin />
            <BsYoutube />
            <BsTwitter />
        </div>
    </div>
  )
}
