import React from 'react'
import './callToAction.css'

function CallToAction() {
    return (
        <div className='cta'>
            <div className='cta-overlay'></div>
            <h2>STAY CONNECTED</h2>
            <p>Subscribe to our 
                weekly newsletter to stay up to 
                date with every happenings</p>
                <div className="subscribe">
                <input type="email" name="email" 
                placeholder='Enter your Email'/>
                <button>subscribe</button>
                </div>
        </div>
    )
}

export default CallToAction
