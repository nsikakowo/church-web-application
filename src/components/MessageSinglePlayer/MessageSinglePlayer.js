import React from 'react'
import './messageSinglePlayer.css';
// import poster from './poster.png'

function MessageSinglePlayer() {
    return (
        <article className='single-messagePlayer'>
            <div className="content">
                <p>A message</p>
                <h2>We make <br/>a difference</h2>
                <button className='btn-primary'>Get Involved</button>
            </div>
            <div className="video">
            <iframe width="489px" 
            height="282px" 
            src="https://www.youtube.com/embed/UjpYUa4s-e0" 
            frameBorder="0" allow="accelerometer; picture-in-picture" title= 'message'  allowFullScreen></iframe>
            </div>
        </article>
    )
}

export default MessageSinglePlayer
