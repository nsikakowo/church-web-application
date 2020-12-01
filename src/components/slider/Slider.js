import React from 'react'
import NextEvent from '../nextEvent/NextEvent'
import './slider.css';

function Slider(props) {
    const {heading, tagline} = props
    return (
        <main id='slider'>
            <div className="slide">
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
