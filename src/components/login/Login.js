import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaGoogle} from 'react-icons/fa';
import './login.css';

function Login() {
    return (
        <section>
            <h1>Welcome back</h1>
            <form className='login'>
                <label htmlFor="email"> Email:<br/>
                    <input type="text" name="email"  placeholder='Enter Email'/>
                </label>
                <label htmlFor="password"> Password:<br/>
                    <input type="password" name="email"  placeholder='Enter Password'/>
                </label>
                <h4>Forgot Password?</h4>
                <button type="submit">Login</button>
            </form>
            <ul className='social-icons'>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaTwitter /></li>
                <li><FaGoogle/></li>
            </ul>
        </section>
    )
}

export default Login
