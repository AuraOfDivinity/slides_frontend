import './Slide.css'
import React from 'react'

export default function Slide({slide}) {
  return (
    <div className="slide-wrapper">
        <img src={slide.image} className='slide-image' alt=""/>
    </div>
  )
}
