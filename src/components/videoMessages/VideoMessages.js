import React from 'react';
import message from '../MessageSinglePlayer/accordion.mp4';
import './videoMessages.css';

function VideoMessages(props) {
    const {btn } = props;
    return (
        <section className='video-messages-container'>
            <h2>RECENT MESSAGES</h2>
            <div className="message-container">
                <article>
                    <div className="video-frame">
                        <video src={message} autoplay controls='true'></video>
                    </div>
                    <h4>Importance of Grace</h4>
                    <h5>Yemi Davids - July</h5>
                    <p>Lorem ipsum dolor, sit amet
                         consectetur adipisicing elit.
                         Esse, sed? Sint ducimus enim est!</p>
                </article>
                <article>
                    <div className="video-frame">
                        <video src={message} autoplay controls='true'></video>
                    </div>
                    <h4>Importance of Grace</h4>
                    <h5>Yemi Davids - July</h5>
                    <p>Lorem ipsum dolor, sit amet
                         consectetur adipisicing elit.
                         Esse, sed? Sint ducimus enim est!</p>
                </article>
                <article>
                    <div className="video-frame">
                        <video src={message} autoplay controls='true'></video>
                    </div>
                    <h4>Importance of Grace</h4>
                    <h5>Yemi Davids - July</h5>
                    <p>Lorem ipsum dolor, sit amet
                         consectetur adipisicing elit.
                         Esse, sed? Sint ducimus enim est!</p>
                </article>
                <article>
                    <div className="video-frame">
                        <video src={message} autoplay controls='true'></video>
                    </div>
                    <h4>Importance of Grace</h4>
                    <h5>Yemi Davids - July</h5>
                    <p>Lorem ipsum dolor, sit amet
                         consectetur adipisicing elit.
                         Esse, sed? Sint ducimus enim est!</p>
                </article>
            </div>
                <button className='btn-primary'>View more podcast</button>
        </section>
    )
}

export default VideoMessages
