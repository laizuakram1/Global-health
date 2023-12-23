import React from 'react'
import ReactPlayer from 'react-player'
import './AdsVideo.css'

export const AdsVideo = () => {
  return (
    <div className='player-wrapper'>
        <ReactPlayer 
        url='https://youtu.be/vgblO9cCzAs?si=qiAnlkCi-t4HD5vb' 
        width='80%'
        height='500px'
        controls='true'
        
       
        />
        
        
    </div>
  )
}
