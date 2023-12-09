import React from 'react'
import './ItemCard.css';
import { Link } from 'react-router-dom';
import cellCounter from '../../assets/images/cell counter.jpeg';
import { BiRightArrowAlt } from "react-icons/bi";


export const ItemCard = () => {
  
  return (
    <div className='products'>
        {/* <Link to={`/products/${id}`}><img onClick={window.scrollTo(0,0)} src={props.thumbnail} alt="" /></Link> */}
        <div className="products-container">
          <div className="product">
            <div></div>
            <img src={cellCounter} alt="" />
            <p><span>$1280</span> | $1170</p>
            <h3>Cell Counter</h3>
            <button>more details <BiRightArrowAlt /></button>
          </div>
          <div className="product">
            <img src={cellCounter} alt="" />
            <p><span>$1280</span> | $1170</p>
            <h3>Cell Counter</h3>
            <button>more details <BiRightArrowAlt /></button>
          </div>
          <div className="product">
            <img src={cellCounter} alt="" />
            <p><span>$1280</span> | $1170</p>
            <h3>Cell Counter</h3>
            <button>more details <BiRightArrowAlt /></button>
          </div>
          <div className="product">
            <img src={cellCounter} alt="" />
            <p><span>$1280</span>| $1170</p>
            <h3>Cell Counter</h3>
            <button>more details <BiRightArrowAlt /></button>
          </div>
          <div className="product">
            <img src={cellCounter} alt="" />
            <p><span>$1280</span> | $1170</p>
            <h3>Cell Counter</h3>
            <button>more details <BiRightArrowAlt /></button>
          </div>
          <div className="product">
            <img src={cellCounter} alt="" />
            <p><span>$1280</span> | $1170</p>
            <h3>Cell Counter</h3>
            <button>more details <BiRightArrowAlt /></button>
          </div>
        </div>
    </div>
  )
}
