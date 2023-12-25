import React from 'react'
import './CoreFeatures.css';
import delivery from '../../assets/images/delivery.png'

export const CoreFeatures = () => {
  return (
    <div className='core_features'>
        <h1>Core Features</h1>

        <div className="features_container">
            <div className="feature">
                <img src={delivery} alt="" />
                <h2>Free Delivery</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aliquam. s</p>
            </div>
            <div className="feature">
                <img src={delivery} alt="" />
                <h2>Free Delivery</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aliquam. s</p>
            </div>
            <div className="feature hover_active">
                <img src={delivery} alt="" />
                <h2>Free Delivery</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aliquam. s</p>
            </div>
            <div className="feature">
                <img src={delivery} alt="" />
                <h2>Free Delivery</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aliquam. s</p>
            </div>
        </div>
    </div>
  )
}
