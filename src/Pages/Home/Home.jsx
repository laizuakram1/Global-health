import React from 'react'
import { Hero } from '../../Components/Hero/Hero'
import { Speciality } from '../../Components/Speciality/Speciality'


export const Home = () => {
  return (
    <div className='home' style={{margin: '40px 40px'}}>
        <Hero></Hero>
        <Speciality />
    </div>
  )
}
