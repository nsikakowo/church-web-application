import React from 'react'
import './forgot.css';

function Forgot() {
    return (
        <section className='forgotPassword'>
            <p>Please fill in the form below with the email address associated 
                with your account and click "Reset My Password". 
                Instructions for resetting your password will be sent to you.</p>
            <form className='login'>
                <label htmlFor="email"> Email Address:<br/>
                    <input type="text" name="email"  placeholder='Enter Email Address'/>
                </label>
                
                
                <button type="submit">reset my password</button>
            </form>
           
        </section>
    )
}

export default Forgot
