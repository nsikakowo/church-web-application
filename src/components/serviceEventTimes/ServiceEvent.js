import React from 'react'
import './serviceEvent.css'

function ServiceEvent() {
    return (
        <div className='serviceEvent-container'>
            <div className="service-summary">
                <h3>Service Times</h3>
                <div className="serviceDays">
                    <article className= 'serviceDay'>
                    <h4>Sunday Service</h4>
                    <p>7:00am Worship Service (1st Service)</p>
                    <p>9:00am Worship Service (2nd Service)</p>
                    </article>
                    <article className= 'serviceDay'>
                    <h4>Wednesday Service</h4>
                    <p>6:30am Worship Service </p>
                    </article>
                    <article className= 'serviceDay'>
                    <h4>Friday Service</h4>
                    <p>10:00am Vigil Service (Every last Friday)</p>
                    </article>
                </div>
            </div>
            <div className="single-service-container">
                <article className='singleEventDays'>
                    <h3>Wednesday, July 22nd</h3>
                    <div className="service-details">
                        <div className="service-details-image">
                            <img src="" alt=""/>
                        </div>
                        <div className="service-details-writeup">
                            <h4>Pastor Davids Simpsons</h4>
                            <p>Worship Service</p>
                            <p>6:30pm</p>
                        </div>
                    </div>
                </article>
                <article className='singleEventDays'>
                    <h3>Wednesday, July 22nd</h3>
                    <div className="service-details">
                        <div className="service-details-image">
                            <img src="" alt=""/>
                        </div>
                        <div className="service-details-writeup">
                            <h4>Pastor Davids Simpsons</h4>
                            <p>Worship Service</p>
                            <p>6:30pm</p>
                        </div>
                    </div>
                </article>
                <article className='singleEventDays'>
                    <h3>Wednesday, July 22nd</h3>
                    <div className="service-details">
                        <div className="service-details-image">
                            <img src="" alt=""/>
                        </div>
                        <div className="service-details-writeup">
                            <h4>Pastor Davids Simpsons</h4>
                            <p>Worship Service</p>
                            <p>6:30pm</p>
                        </div>
                    </div>
                </article>
                <article className='singleEventDays'>
                    <h3>Wednesday, July 22nd</h3>
                    <div className="service-details">
                        <div className="service-details-image">
                            <img src="" alt=""/>
                        </div>
                        <div className="service-details-writeup">
                            <h4>Pastor Davids Simpsons</h4>
                            <p>Worship Service</p>
                            <p>6:30pm</p>
                        </div>
                    </div>
                </article>
                <button className='btn-primary'>view more</button>
            </div>
        </div>
    )
}

export default ServiceEvent
