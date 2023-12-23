import React from 'react'
import { ItemCard } from '../ItemCard/ItemCard'
import '../BestSelling/BestSelling.css'
import products from '../../assets/products.json';

export const BestSelling = () => {
  return (
    <div className='best_selling'>
        <h1>Best Selling</h1>
        

        <ItemCard products={products.slice(1,5)}/>
    </div>
  )
}
