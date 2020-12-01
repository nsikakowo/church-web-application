import React from 'react'
import recharge from './recharge.jpg'
import couple from './couple.jpg'
import foster from './foster.jpg'
import './upcomingEvents.css'

function UpcomingEvents() {
    return (
        <div className= 'upcomingEvents'>
            <h1>Upcoming Events</h1>
        <section>
            <article className='event'>
                <div className="event-photo">
                <img src={recharge} alt="event"/>
                </div>
                <h5>Thu, jul 15th</h5>
                <p>Recharge conference</p>
            </article>
            <article className='event'>
                <div className="event-photo">
                <img src={couple} alt="event"/>
                </div>
                <h5>Thu, jul 15th</h5>
                <p>Couples conference</p>
            </article>
            <article className='event'>
                <div className="event-photo">
                <img src={foster} alt="event"/>
                </div>
                <h5>Thu, jul 15th</h5>
                <p>Foster & Adoption Group</p>
            </article>
           
        </section>
        </div>
    )
}

export default UpcomingEvents
