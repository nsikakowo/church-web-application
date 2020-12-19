import React from 'react'
import {NavLink} from 'react-router-dom'
import './aboutWelcome.css'

function AboutPageWelcome(props) {

const {image} = props;

    return (
        <div className='welcome-container'>
            <div className="welcome-image">
                <img src={image} alt="welcome"/>
            </div>
            <div className="welcome-content">
                <h2>Welcome!</h2>
                <p>Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since 
                    the 1500s, when an unknown printer took a galley 
                    of type and scrambled it to make a type specimen 
                    book. It has survived not only five centuries,
                     the leap into electronic typesetting, remaining
                      essentially unchanged.</p>
                      <h5>Gathering Times</h5>
                      <p id='date'>Saturday: 5:30pm</p>
                      <p>Sunday: 7:00am, 9:00am & 11:00am</p>
                      <NavLink to = './getdirections'><button className='btn-primary'>FIND US</button></NavLink>
            </div>
        </div>
    )
}

export default AboutPageWelcome
