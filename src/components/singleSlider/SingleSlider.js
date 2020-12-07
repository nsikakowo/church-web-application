import React from 'react'
import './singleslider.css'

function SingleSlider(props) {
    const {heading, tagline, slideBG} = props
    return (
        <div id='singleSlider'>
             <div className="single-slide">
             <div className="slide-bg">
                    <img src='https://images.unsplash.com/photo-1602025747966-d2eb8bdeeea8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' alt="slider-background"/>
                </div>
                <h1>{heading} </h1>
    <h5>{tagline}</h5>
            </div>
        </div>
    )
}

export default SingleSlider
