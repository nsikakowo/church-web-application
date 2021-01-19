import React from 'react'
import './singleResource.css'

function SingleResource(props) {

const {image, text, heading, btn1, btn2} = props;

    return (
        <section className= 'resource-container'>
            <div className="resource-banner">
                <img src={image} alt={heading}/>
            </div>
            <div className="resource-content">
                <h2> {heading} </h2>
                <p>{text}</p>
                    <button className= 'btn-primary'>{btn1}</button>
                    <button className='btn-outline'>{btn2}</button>
            </div>
        </section>
    )
}

export default SingleResource
