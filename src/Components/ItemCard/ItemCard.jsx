import React from 'react'
import './ItemCard.css';
import { Link } from 'react-router-dom';
import cellCounter from '../../assets/images/cell counter.jpeg';
import { BiRightArrowAlt } from "react-icons/bi";


export const ItemCard = ({products}) => {

  return (
    <div className='products'>
        {/* <Link to={`/products/${id}`}><img onClick={window.scrollTo(0,0)} src={props.thumbnail} alt="" /></Link> */}
        <div className="product-container">
          {
            products?.map((item, i) =><>
            <div className='product'>
              <img src={item?.imageUrl} alt="" />
              <p><span>{item?.old_price}</span> | {item?.new_price}</p>
              <h4>{item?.name}</h4>
              <button>more details <BiRightArrowAlt /></button>
            </div>
            </>)
          }
        </div>
    </div>
  )
}
