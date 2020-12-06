import React from 'react'
import './events.css'
// import bannerbg from '../upcomingEvents/recharge.jpg'

function Events() {
    return (
        <>
        <div className='event'>
            <div className="event-banner">
                <img src='' alt="banner"/>
                <div className="event-content">
                    <h3 className='event-title'>
                     Recharge Conference 2020
                    </h3>
                    <div className="event-subtitle">
                        <h4 className='subtitle'>Towards a winning half</h4>
                        <p className='date'>July 21th - 31st </p>
                    </div>
                </div>
            </div>
            <div className="event-details">
                <h3 className='event-heading'>Recharge Conference 2020 : Towards a winning half</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an
                       unknown printer took a galley of type and scrambled 
                       it to make a type specimen book. It has survived not 
                       only five centuries, but also the leap into electronic
                        typesetting, 
                    remaining essentially unchanged.</p>
                <button className='btn-primary'>view more</button>
            </div>

        </div>
        <div className='event'>
            <div className="event-banner">
                <img src='' alt="banner"/>
                <div className="event-content">
                    <h3 className='event-title'>
                     Recharge Conference 2020
                    </h3>
                    <div className="event-subtitle">
                        <h4 className='subtitle'>Towards a winning half</h4>
                        <p className='date'>July 21th - 31st </p>
                    </div>
                </div>
            </div>
            <div className="event-details">
                <h3 className='event-heading'>Recharge Conference 2020 : Towards a winning half</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an
                       unknown printer took a galley of type and scrambled 
                       it to make a type specimen book. It has survived not 
                       only five centuries, but also the leap into electronic
                        typesetting, 
                    remaining essentially unchanged.</p>
                <button className='btn-primary'>view more</button>
            </div>

        </div>
        </>
    )
}

export default Events
