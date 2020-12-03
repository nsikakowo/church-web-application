import React from 'react'
import './singleslider.css'

function SingleSlider(props) {
    const {heading, tagline} = props
    return (
        <div id='singleSlider'>
             <div className="single-slide">
                <h1>{heading} </h1>
    <h5>{tagline}</h5>
            </div>
        </div>
    )
}

export default SingleSlider
