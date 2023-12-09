import React from 'react'
import './ItemCard.css';
import { Link } from 'react-router-dom';

export const ItemCard = (props) => {
console.log(props)
  
  return (
    <div className='item'>
        {/* <Link to={`/products/${id}`}><img onClick={window.scrollTo(0,0)} src={thumbnail} alt="" /></Link>
        <p>{brand}</p>
        <div className="item-prices">
            <div className="item-price-new">$ {price}</div>
            <div className="item-price-old">$ {price}</div>
        </div> */}
    </div>
  )
}
