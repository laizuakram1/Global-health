import React, { useRef, useState } from 'react'
import './Hero.css';
import { BsList,BsFillMortarboardFill  } from "react-icons/bs";
import { BiSolidChevronDown,BiDna,BiSolidBriefcaseAlt2,BiSliderAlt ,BiSolidBaguette,BiSolidBong,BiSolidInjection,BiPlusMedical,BiBullseye     } from "react-icons/bi";
import hero_bg from '../../assets/images/hero.jpg';
import hero_bg2 from '../../assets/images/hero 2.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';



export const Hero = () => {
  // category header vanilla js
  

//   function dropDown() {
//   document.querySelectorAll("item").style.display = "none";
// }







  return (
    <div className='hero'>
        <div className="hero-left">
            <div className="category-container">
              <div className="category-header">
                <h3><BsList /> CATEGORIES</h3> <BiSolidChevronDown />
              </div>
              <div className="category-items">
                <div className="item">
                    <BiSolidBriefcaseAlt2   /> <span>Equipments</span>
                </div>
                <div className="item">
                    <BiDna /> <span>Laboratory Setup</span>
                </div>
                <div className="item">
                    <BiSolidBaguette /> <span>Reagents and Kits</span>
                </div>
                <div className="item">
                    <BiSolidBong  /> <span>OT accessories</span>
                </div>
                <div className="item">
                    <BiSolidInjection  /> <span>Surgical Items  </span>
                </div>
                <div className="item">
                    <BiPlusMedical  /> <span>First Aid</span>
                </div>
                <div className="item">
                    <BiBullseye  /> <span>Opthalmic products</span>
                </div>
                <div className="item">
                    <BiSliderAlt  /> <span>Sales and Service</span>
                </div>
              </div>
                 
            </div>
        </div>
        <div className="hero-right">
            <div className="hero-image-container">
              {/* <img src={hero_bg} alt="" />
              <img src={hero_bg2} alt="" />
              <img src={hero_bg} alt="" /> */}

              <Swiper
        spaceBetween={30}
        effect={'fade'}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={hero_bg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero_bg2} />
        </SwiperSlide>

      </Swiper>
            </div>
        </div>
    </div>
  )
}
