import React from 'react'
import './donation.css'
// import './donate.scss'

function Donation({title, text}) {

    return (
        <div className='donation-container'>
            <div className="donation-description">
                <h2>{title}</h2>
                <p> {text} </p>
            </div>
            <div className="donation-form">
                <form>
                    <select name="donation-type" id="donation-type">
                        <option className='select-items'  value="default">Donation Type</option>
                        <option className='select-items' value="one-time">One Time</option>
                        <option className='select-items' value="recurring">Recurring</option>
                    </select>
                    <label htmlFor="amount">Amount<br/>
                        <input type="number" name="amount" id="amount" placeholder='$0'/>
                    </label>
                    <div id='interval'>
                    <input id="toggle-on" className="toggle toggle-left" name="toggle" value="false" type="radio"  />
                        <label htmlFor="toggle-on" className="btn">Monthly</label>
                        <input id="toggle-off" className="toggle toggle-right" name="toggle" value="true" type="radio"/>
                        <label htmlFor="toggle-off" className="btn">Annually</label>
                        </div>
                    <button className='btn-primary'>make payment</button>
                </form>
            </div>
        </div>
    )
}

export default Donation
