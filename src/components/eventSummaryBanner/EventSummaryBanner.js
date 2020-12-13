import React from 'react'
import './eventSummary.css'

function EventSummaryBanner() {
    return (
        <section className='event-summary'>
            <div className="event-overlay"></div>
            <div className="event-bg">
                <img src="https://www.payscale.com/career-news/wp-content/uploads/sites/2/2016/12/hzgs56ze49s-anthony-delanoix.jpg" alt="event"/>
            </div>
            <div className="event-detail-summary">
            <h2>Couples Conference 2021 : <span>Together Forever</span> </h2>
            <h3>Date & Time</h3>
            <p>Friday, July 31st, 2021 at 6:30pm</p>
            <h3>Venue</h3>
            <p>(Online)</p>
            </div>
        </section>
    )
}

export default EventSummaryBanner
