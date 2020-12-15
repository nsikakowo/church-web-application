import React from 'react'
import NextEvent from '../nextEvent/NextEvent'
import './slider.css';


function Slider(props) {
    const {id, image, sub_title, title} = props;

 
    return (
        <main id='slider'>
             <div className="slide" key= {id}>
                        <div className="slide-image">
                            <img src={image} alt="slider-background"/>
                        </div>
                        <h1>{title} </h1>
                         <h5>...{sub_title}</h5>
            
                    </div>
                  <div className="event-countdown">
                        <NextEvent/>
                    </div>
        </main>
 

    )
    }

export default Slider
