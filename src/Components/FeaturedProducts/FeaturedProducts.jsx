import React from "react";
import '../FeaturedProducts/FeaturedProducts.css';
import { BiSolidStar,BiSolidStarHalf } from "react-icons/bi";
import bp_machine from '../../assets/images/bp.png';


export const FeaturedProducts = () => {
  return (
    <div className="featured_products">
      <h1>Featured Products</h1>

      <div className="featured_container">
        <div className="featured_item">
          <img src={bp_machine} alt="product image" />
          <div className="featured_info">
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStarHalf />

            <h5>Tail Light Lens</h5>
            <p>$ 149.3 <small>$187.4</small></p>

          </div>
        </div>
        <div className="featured_item">
          <img src={bp_machine} alt="product image" />
          <div className="featured_info">
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStarHalf />

            <h5>Tail Light Lens</h5>
            <p>$ 149.3 <small>$187.4</small></p>

          </div>
        </div>
        <div className="featured_item">
          <img src={bp_machine} alt="product image" />
          <div className="featured_info">
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStarHalf />

            <h5>Tail Light Lens</h5>
            <p>$ 149.3 <small>$187.4</small></p>

          </div>
        </div>
        <div className="featured_item">
          <img src={bp_machine} alt="product image" />
          <div className="featured_info">
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStarHalf />

            <h5>Tail Light Lens</h5>
            <p>$ 149.3 <small>$187.4</small></p>

          </div>
        </div>
        <div className="featured_item">
          <img src={bp_machine} alt="product image" />
          <div className="featured_info">
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStarHalf />

            <h5>Tail Light Lens</h5>
            <p>$ 149.3 <small>$187.4</small></p>

          </div>
        </div>
        <div className="featured_item">
          <img src={bp_machine} alt="product image" />
          <div className="featured_info">
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStarHalf />

            <h5>Tail Light Lens</h5>
            <p>$ 149.3 <small>$187.4</small></p>

          </div>
        </div>
      </div>
    </div>
  );
};
