import React from 'react'
import { Hero } from '../../Components/Hero/Hero'
import { Speciality } from '../../Components/Speciality/Speciality'
import { OurProducts } from '../../Components/OutProducts/OurProducts'
import { FeaturedProducts } from '../../Components/FeaturedProducts/FeaturedProducts'
import { BestSelling } from '../../Components/BestSelling/BestSelling'
import { AdsVideo } from '../../Components/AdsVideo/AdsVideo'


export const Home = () => {
  return (
    <div className='home' style={{margin: '40px 40px'}}>
        <Hero></Hero>
        <Speciality />
        <OurProducts />
        <BestSelling />
        <FeaturedProducts />
        <AdsVideo />
    </div>
  )
}
