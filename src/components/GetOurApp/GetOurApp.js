import React from 'react'
import Google from './google-button.png'
import Apple from './apple-button.png'
import './getOurApp.css'

function GetOurApp() {
    return (
        <div className='getApp'>
            <h2>CONNECT WITH US ON OUR MOBILE APP</h2>
            <h4>GET OUR CHURCH MOBILE APP</h4>
            <div className="buttons">
                <img src={Google} alt="google"/>
                <img src={Apple} alt="apple"/>
            </div>
        </div>
    )
}

export default GetOurApp
