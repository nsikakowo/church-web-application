import React from 'react'
import './sendUsMessage.css'
import googlemap from './map.jpg'

function SendUsMessage() {
    return (
        <div className='main-message-container'>
            <div className="form">
                <h2>Send Us a Message</h2>
                <form id='sendMessage'>
                    <input type="text" name="firstname" 
                    placeholder='Your Name'/>
                    <input type="text" name="email" 
                    placeholder='Your Email Address'/>
                    <textarea name="message"  cols="30" 
                    rows="20"></textarea>
                    <label htmlFor="checkbox" id= 'checkLabel'>
                    <input type="checkbox" name="agreement" id='check'
                     value='agreement'/>
                          I agree that my submitted data is 
                     been collected and stored.</label>
                     <button className= 'btn-primary' id='message-btn' >send message</button>
                </form>
            </div>
            <div className="google-map">
                <img src='' alt=""/>
            </div>
        </div>
    )
}

export default SendUsMessage
