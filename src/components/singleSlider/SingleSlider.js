import React from 'react'
import './singleslider.css'

function SingleSlider(props) {
    const {heading, tagline, slideBG} = props
    return (
        <div id='singleSlider'>
             <div className="single-slide">
             <div className="slide-bg">
                    <img src='https://blog.loveawake.com/wp-content/uploads/2020/10/alex-wark-vu8lKvryurg-unsplash-980x551.jpg' alt="slider-background"/>
                </div>
                <h1>{heading} </h1>
    <h5>{tagline}</h5>
            </div>
        </div>
    )
}

export default SingleSlider
