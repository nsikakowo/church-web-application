import React from 'react'
import './singleslider.css'

function SingleSlider(props) {
    const {heading, tagline, image, children} = props
    return (
        <div id='singleSlider'>
             <div className="single-slide">
             <div className="slide-bg">
                    <img src={image} alt="slider-background"/>
                </div>
                <h1>{heading} </h1>
                {children}
    <h5>{tagline}</h5>
            </div>
        </div>
    )
}

export default SingleSlider
