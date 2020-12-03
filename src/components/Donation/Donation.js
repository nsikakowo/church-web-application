import React from 'react'
import './donation.css'

function Donation() {
    return (
        <div className='donation-container'>
            <div className="donation-description">
                <h2>SUPPORT OUR CHURCH</h2>
                <p>Thank you for your support. Choose a fund
                     to give towards and enter an amount for your gift. 
                     Your giving is making a difference in this church, 
                    our community, and the world.</p>
            </div>
            <div className="donation-form">
                <form>
                    <select name="donation-type" id="donation-type">
                        <option value="default">Donation Type...</option>
                        <option value="one-time">One Time</option>
                        <option value="recurring">Recurring</option>
                    </select>
                    <label htmlFor="amount">Amount<br/>
                        <input type="number" name="amount" id="amount" placeholder='$0'/>
                    </label>
                    <button className='btn-primary'>make payment</button>
                </form>
            </div>
        </div>
    )
}

export default Donation
