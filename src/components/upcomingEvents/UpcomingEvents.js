import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import DayJS from 'dayjs'
import './upcomingEvents.css'

const eventApi = 'https://church.aftjdigital.com/api/events';

function UpcomingEvents() {

    const [data, setData] = useState([]);

    const getEventData = async () => {
        const response = await axios.get(eventApi);
        const events = response.data.data.data
        setData(events)
       
    }

    useEffect(() => {
        getEventData();
    }, [])

    return (
        <div className= 'upcomingEvents'> 
            <h1>Upcoming Events</h1>
        <div className=' upcomingContainer'>
            {data.map((item) =>{
                return(
                    <article className='event' key = {item.id}>
                        <div className="event-photo"> 
                            <img src={item.image} alt={item.topic}/>
                        </div>
                        <h5> {item.event_date}</h5>
                        <p>{item.topic}</p>
                    </article>
                )
            })}
            
            
           
        </div>
        </div>
    )
}

export default UpcomingEvents
