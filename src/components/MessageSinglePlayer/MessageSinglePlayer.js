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
            <iframe width="620" height="200" src="https://www.youtube.com/embed/UjpYUa4s-e0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </article>
    )
}

export default MessageSinglePlayer
