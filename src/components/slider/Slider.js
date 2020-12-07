import React from 'react'
import NextEvent from '../nextEvent/NextEvent'
// import SlideBg from './pastor.png'
import './slider.css';

function Slider(props) {
    const {heading, tagline} = props
    return (
        <main id='slider'>
            <div className="slide">
                <div className="slide-image">
                    <img src='https://tylerperry.com/wp-content/uploads/2018/08/image-2-1080x720.png' alt="slider-background"/>
                </div>
                <h1>{heading} </h1>
    <h5>{tagline}</h5>
            </div>
            <div className="event-countdown">
                <NextEvent/>
            </div>
        </main>
    )
}

export default Slider
