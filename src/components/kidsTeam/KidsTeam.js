import React from 'react'
import {NavLink } from 'react-router-dom'
import './kidsteam.css'

function KidsTeam() {
    return (
        <section className='team-wrapper'>
            <div className="team-overlay"></div>
            <div className="team-banner">
                <img src="https://www.gettingsmart.com/wp-content/uploads/2018/01/Elementary-Students-Personalized-Art-Projects-Feature-Image.jpg" alt="kids"/>
            </div>
            <h3>MAKE A DIFFERENCE</h3>
            <p>When you serve in kidslife you have the opportuninty to love kids, serve with
                an amazing group of people, and grow in you wak with God. We invite you toggleapply online or stop by the kidslife office and 
                start your journey today!
            </p>
            <NavLink to ='#'><button className='btn-outline'>Join the team</button></NavLink>
        </section>
    )
}

export default KidsTeam
