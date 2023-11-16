import React from 'react'
import './Navbar.css';
import { NavbarTop } from './NavbarTop'
import { NavbarMiddle } from './NavbarMiddle'

export const Navbar = () => {
  return (
    <div>
      <NavbarTop />
      <NavbarMiddle />

      {/* navbar main */}
      <div className="navbar-main">

      </div>
    </div>
  )
}
