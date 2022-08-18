import './Slide.css'
import React from 'react'
import Text from '../Text/Text'
import { withGeneralStyling, withHeaderStyling } from '../Text/withHeaderStyling'
const HeaderText = withHeaderStyling(Text)
const SubTitle = withGeneralStyling(Text)


export default function Slide({slide}) {
    return (
        <div className="slide-wrapper">
            <img src={slide.image} className='slide-image' alt=""/>
            <HeaderText content='hello title'/>
            <SubTitle content='worrld'/>
        </div>
    )
}
