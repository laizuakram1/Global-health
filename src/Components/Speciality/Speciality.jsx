import React from 'react'
import './Speciality.css';
import { BiSolidShip,BiSupport,BiMapPin   } from "react-icons/bi";

export const Speciality = () => {
  return (
    <div className='speciality'>
        <div className="speciality-items">
            <div className="special">
                <BiSolidShip  />
                <div className="special-text">
                    <h3>Free Shipping</h3>
                    <p>On all orders over $49.00</p>
                </div>
            </div>
            <div className="special">
                <BiSupport  />
                <div className="special-text">
                    <h3>24/7 Online Support</h3>
                    <p>On all orders over $49.00</p>
                </div>
            </div>
            <div className="special">
                <BiMapPin  />
                <div className="special-text">
                    <h3>First Delivery</h3>
                    <p>On all orders over $49.00</p>
                </div>
            </div>
           
        </div>
    </div>
  )
}
