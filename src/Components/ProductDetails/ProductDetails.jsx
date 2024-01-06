import React, { useState } from 'react'
import './ProductDetails.css'
import { PageHeader } from '../PageHeader/PageHeader'
// import {useParams} from 'react-router-dom';

import cell_counter from '../../assets/images/cell counter.jpeg'
import paymentImg from '../../assets/images/payment-2.png'
import { BiSolidStar,BiSolidStarHalf,BiMinus,BiPlus,BiHeart,BiRefresh,BiLogoFacebookCircle     } from "react-icons/bi";








export const ProductDetails = () => {
  // let {id} = useParams();
  
  
  return (
    <div className='product_details'>
      <PageHeader />

      <div className="product_details_container">
        <div className="details_left">
          <div className="details_img">
            <img src={cell_counter} alt="" />
          </div>
        

          <div className="details_text">
            <div className="details_review_icons">
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStarHalf />
              <span>(94 reviews)</span>
            </div>
            <h3>Hand Sanitizer</h3>
            <h1>$17.90 <span>$21.70</span></h1>
            <hr />
            <p>Catergories: <small>face musk</small>, <small>PPE-kit</small>, <small>safety suits</small></p>
            <hr />
            <div className="add_to_cart">
              <BiMinus />
              <span>1</span>
              <BiPlus />
              <button>Add To Cart</button>
            </div>
            <p><BiHeart /> Add to whishlist <span><BiRefresh /> Compare</span></p>
            <hr />

            <div className="social-share">
              <p>Share:</p>
              <BiLogoFacebookCircle />
              <BiLogoFacebookCircle />
              <BiLogoFacebookCircle />
              <BiLogoFacebookCircle />
            </div>
            <div className="payment_way">
              <h4>Available Payment Gateways</h4>
              <img src={paymentImg} alt="" />
            </div>

          </div>

        </div>
        
        <div className="details_right">
          <h1>Top Rated</h1>
          <div className="top_rated_item">
            <img src={cell_counter} alt="" />
            <div className="top_rated_icons">
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />

              <p>Mixer Solid cover</p>
              <p>$13.45 <span>$23.54</span></p>
            </div>
          </div>
          <hr />
          <div className="top_rated_item">
            <img src={cell_counter} alt="" />
            <div className="top_rated_icons">
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />

              <p>Mixer Solid cover</p>
              <p>$13.45 <span>$23.54</span></p>
            </div>
          </div>
          <hr />
          <div className="top_rated_item">
            <img src={cell_counter} alt="" />
            <div className="top_rated_icons">
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />

              <p>Mixer Solid cover</p>
              <p>$13.45 <span>$23.54</span></p>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  )
}
