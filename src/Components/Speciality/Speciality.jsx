import React from 'react'
import './Speciality.css';
import { BiShoppingBag } from "react-icons/bi";

export const Speciality = () => {
  return (
    <div className='speciality'>
        <div className="speciality-items">
            <div className="special">
                <BiShoppingBag />
                <div className="special-text">
                    <h3>Free Shipping</h3>
                    <p>On all orders over $49.00</p>
                </div>
            </div>
            <div className="special">
                <BiShoppingBag />
                <div className="special-text">
                    <h3>Free Shipping</h3>
                    <p>On all orders over $49.00</p>
                </div>
            </div>
            <div className="special">
                <BiShoppingBag />
                <div className="special-text">
                    <h2>Free Shipping</h2>
                    <p>On all orders over $49.00</p>
                </div>
            </div>
           
        </div>
    </div>
  )
}
