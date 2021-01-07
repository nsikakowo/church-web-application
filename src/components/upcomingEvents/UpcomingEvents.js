import React from 'react'
// import recharge from './recharge.jpg'
// import couple from './couple.jpg'
// import foster from './child.jpg'
import './upcomingEvents.css'

function UpcomingEvents() {
    return (
        <div className= 'upcomingEvents'> 
            <h1>Upcoming Events</h1>
        <div className=' upcomingContainer'>
            <article className='event'>
                <div className="event-photo"> 
                <img src='https://images.unsplash.com/photo-1526746323784-6bc814d79273?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max' alt="event"/>
                </div>
                <h5>Thu, jul 15th</h5>
                <p>Recharge conference</p>
            </article>
            <article className='event'>
                <div className="event-photo">
                <img src='https://image.freepik.com/free-photo/white-christian-couple-enjoying-reading-bible-middle-field_181624-20910.jpg' alt="event"/>
                </div>
                <h5>Thu, jul 15th</h5>
                <p>Couples conference</p>
            </article>
            <article className='event'>
                <div className="event-photo">
                <img src='https://plummeryouthpromise.org/wp-content/uploads/2020/05/gabe-pierce-pXPPU-6az_0-unsplash-scaled.jpg' alt="event"/>
                </div>
                <h5>Thu, jul 15th</h5>
                <p>Foster & Adoption Group</p>
            </article>
           
        </div>
        </div>
    )
}

export default UpcomingEvents
