import React, { useEffect, useRef, useState} from 'react';
import axios from 'axios'
import { NavLink} from 'react-router-dom'
import './nextEvent.css';

const eventApi = 'https://church.aftjdigital.com/api/events';

function NextEvent() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  const [eventTime, setEventTime] =useState([]);

  let  interval = useRef();

  const getEventApi = async () =>{
    const response = await axios.get(eventApi);
    setEventTime(response.data.data);
  }

  const startTimer = () => {
    const countDownDate = new Date('March 11, 2021 04:15:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60));
      const seconds = Math.floor(distance % (1000 * 60 ) / 1000);

      if (distance < 0 ){
          //stop timer
          clearInterval(interval.current);
      }else{
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
      }
    }, 1000);
  }

  
  useEffect(() => {
    startTimer();
      clearInterval(interval.current);
      getEventApi();
  }, []);
  
  return (
    <section className='timer-container'>
      {eventTime.map((item, i)=> {
        if(i === 0) {
       return ( <div className='time-block' key ={item.id}>
                        <div className="title">
                            <h3>Next Upcoming Event</h3>
                            <p>{item.topic}</p>
                        </div>
                      
                      <section className="timer">
                        <div>
                          <p>{timerDays}</p>
                          <p><small>Days</small></p>
                        </div>
                        
                        <div>
                          <p>{timerHours}</p>
                          <p><small>Hours</small></p>
                        </div>
                          
                        <div>
                          <p> {timerMinutes} </p>
                          <p><small>Minutes</small></p>
                        </div>
                          
                        <div>
                          <p> {timerSeconds} </p>
                          <p><small>Seconds</small></p>
                        </div> 
      </section>
      </div>
      ) }})}
      <div className="service-reg">
        <NavLink to= './serviceregistration'>
        <button>Service Registration</button>
        </NavLink>
      </div>
       
      </section>


    
  );
}

export default NextEvent;
