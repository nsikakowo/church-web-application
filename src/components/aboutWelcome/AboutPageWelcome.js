import React from 'react'
import {NavLink} from 'react-router-dom'
import './aboutWelcome.css'

function AboutPageWelcome(props) {

const {image, title, sub_heading, text, midweek_time, sunday_time, btn} = props;

    return (
        <div className='welcome-container'>
            <div className="welcome-image">
                <img src={image} alt="welcome"/>
            </div>
            <div className="welcome-content">
                <h2> {title} </h2>
                <p> {text} </p>
                      <h5> {sub_heading} </h5>
                      <p id='date'>{midweek_time} </p>
                      <p> {sunday_time} </p>
                      <NavLink to = './getdirections'><button className='btn-primary'>{btn}</button></NavLink>
            </div>
        </div>
    )
}

export default AboutPageWelcome
