import React from 'react'
import '../Footer/Footer.css'
import { BsFacebook,BsInstagram,BsLinkedin   } from "react-icons/bs";
import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="waves">
        <div className="wave" id='wave1'></div>
        <div className="wave" id='wave2'></div>
        <div className="wave" id='wave3'></div>
        <div className="wave" id='wave4'></div>
      </div>
      <div className="footer_icons">
        <BsFacebook />
        <BsInstagram  />
        <BsLinkedin  />
        <BsFacebook />
      </div>
      <div className="footer-list">
        <Link to='/'>Home</Link>
        <Link to='/'>Accessories</Link>
        <Link to='/'>Reagent</Link>
        <Link to='/'>Equipments</Link>
        <Link to='/'>Surgical</Link>
        <Link to='/'>Contact</Link>
      </div>
      <div className="copyright-mark">
        <p>all right reserve &copy;</p>
      </div>
    </div>
  )
}
