import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaGoogle} from 'react-icons/fa';
import './signup.css';

function SignUp() {
    return (
        <div className='signup'>
            <h1>Create your Account</h1>
            <form className='login'>
            <label htmlFor="firstname"> First Name:<br/>
                    <input type="text" name="email"  placeholder='Enter First Name'/>
                </label>
                <label htmlFor="lastname"> Last Name:<br/>
                    <input type="text" name="email"  placeholder='Enter Last Name'/>
                </label>
                <label htmlFor="email"> Email:<br/>
                    <input type="text" name="email"  placeholder='Enter Email Address'/>
                </label>
                <label htmlFor="password"> Password:<br/>
                    <input type="password" name="email"  placeholder='Enter Password'/>
                </label>
                {/* <h4>Forgot Password?</h4> */}
                <button type="submit">create my account</button>
            </form>
            <ul className='social-icons'>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaTwitter /></li>
                <li><FaGoogle/></li>
            </ul>
        </div>
    )
}

export default SignUp
