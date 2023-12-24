import React from 'react'
import './Navbar.css';
import { NavbarTop } from './NavbarTop'
import { NavbarMiddle } from './NavbarMiddle'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <NavbarTop />
      <NavbarMiddle />

      {/* navbar main */}
      <div className="navbar-main">
          <ul className='nav-list'>
            <Link to='/'><li>Home</li></Link>
            <li>About</li>
            <Link to='/shop'><li>Shop</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
            
          </ul>
      </div>
    </div>
  )
}
