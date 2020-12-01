import React from 'react'
import './messageSinglePlayer.css';
import Video from './accordion.mp4'

function MessageSinglePlayer() {
    return (
        <article className='single-messagePlayer'>
            <div className="content">
                <p>A message</p>
                <h2>We make <br/>a difference</h2>
                <button className='btn-primary'>Get Involved</button>
            </div>
            <div className="video">
                <video src={Video} autoPlay playsInline muted controls/>
            </div>
        </article>
    )
}

export default MessageSinglePlayer
