import React from 'react'
import './ProductDetails.css'
import { PageHeader } from '../PageHeader/PageHeader'
// import {useParams} from 'react-router-dom';
import cell_counter from '../../assets/images/cell counter.jpeg'

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
          <div className="details_text"></div>
        </div>
        <div className="details_right"></div>
      </div>
    </div>
  )
}
