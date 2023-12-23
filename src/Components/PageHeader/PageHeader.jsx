import React from 'react'
import './PageHeader.css';
import { BiSolidHome } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";

export const PageHeader = () => {
  return (
    <div className='page_header'>
        <h1>Contact Us</h1>

        <div className="page_locator">
            <BiSolidHome />
            <h5>Home</h5>
            <BsChevronRight />
            <h5>Contact</h5>
            
            
        </div>
    </div>
  )
}
