import React from 'react'
import './Navbar.css';
import { BiPhoneCall,BiSearch,BiSolidUser,BiCart   } from "react-icons/bi";

import logo from '../../assets/images/logo.webp';

export const NavbarMiddle = () => {
  return (
    <div className='navbar-middle'>
        <div className="logo">
          <img src={logo} alt="" />
          <BiPhoneCall />+880 1770850305
        </div>

        <div className="search-bar">
          <input type="text" placeholder='search here'/>
          <BiSearch />
          
        </div>
        <div className="login-cart">
          <BiSolidUser />
          <BiCart />
        </div>
    </div>
  )
}
