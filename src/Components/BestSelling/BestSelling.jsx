import React from 'react'
import { ItemCard } from '../ItemCard/ItemCard'
import '../BestSelling/BestSelling.css'

export const BestSelling = () => {
  return (
    <div className='best_selling'>
        <h1>Best Selling</h1>

        <ItemCard />
    </div>
  )
}
