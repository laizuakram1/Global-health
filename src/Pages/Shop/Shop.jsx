import React from 'react'
import './Shop.css';
import { BsFillGridFill,BsListTask   } from "react-icons/bs";
import { BiSolidChevronsLeft,BiSolidChevronsRight } from "react-icons/bi";
import { ItemCard } from '../../Components/ItemCard/ItemCard';
import products from '../../assets/products.json';

export const Shop = () => {
  return (
    <div className='shop'>
        <div className="shop_bar">
            <div className="shop_icons">
                <BsFillGridFill />
                <BsListTask   />
            </div>
            <div className="shop_sort">
                <select>
                    <option value="">sort by price: low to high</option>
                    <option value="">sort by price: high to low</option>
                    <option value="">popular</option>
                    <option value="">new arrivals</option>
                </select>
            </div>
            <div className="shop_sort_number">
                <p>Showing 10 of 30 result</p>
            </div>
        </div>

        <ItemCard products={products}></ItemCard>

        <div className="shop_pagination">
            <ul>
                <li><BiSolidChevronsLeft /></li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>...</li>
                <li>10</li>
                <li><BiSolidChevronsRight /></li>
            </ul>
        </div>
    </div>
  )
}
