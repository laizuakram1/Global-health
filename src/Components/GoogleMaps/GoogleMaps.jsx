import React from 'react'
import './GoogleMaps.css';

export const GoogleMaps = () => {
  return (
    <div className='google_maps'>
        <h1>Find Us on Google Maps</h1>
        <p>You can also track our exact location by using Google maps. See our Location on <br /> Google maps with satelite view or by road.</p>


        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.0639744558!2d90.254873766693!3d23.78075302762758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2z4Kai4Ka-4KaV4Ka-!5e0!3m2!1sbn!2sbd!4v1703384631196!5m2!1sbn!2sbd" style={{width:"1000px", height:"600px", border: '0px' }} loading="lazy"></iframe>
        
    </div>
  )
}
