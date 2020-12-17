import React, { useEffect, useRef, useState} from 'react';
import { NavLink} from 'react-router-dom'
import './nextEvent.css';

function NextEvent() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let  interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date('December 31, 2020 00:00:00').getTime();

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

  //componetDidmount
  useEffect(() => {
    startTimer();
    return() => {
      clearInterval(interval.current);
    }
  });
  
  return (
    <section className='timer-container'>
      <div className='time-block'>
        <div className="title">
            <h3>Next Upcoming Event</h3>
            <p>Sunday Service</p>
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
      <div className="service-reg">
        <NavLink to= './serviceregistration'>
        <button>Service Registration</button>
        </NavLink>
      </div>
      </section>


    
  );
}

export default NextEvent;
