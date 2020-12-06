import React from 'react'
import { Link } from 'react-router-dom';
import './secondaryMenu.css'

function SecondayMenu() {
    return (
        <nav className='secondary-menu'>
            <div className="left-menu">
                <ul>
                    <li> <Link to='./welcomeToChurch'>Watch Online
                </Link></li>
                    <li> <Link to='./sermonPage'>Sermons
                </Link></li>
                    <li> <Link to='./Connect'>Connect
                </Link></li>
                </ul>
            </div>
            <div className="right-menu">
                <ul>
                <li> <Link to='./register'>Sign Up
                </Link></li>
                    <li> <Link to='./SignIn'>Log In
                </Link></li>
                    
                </ul>
            </div>
            
        </nav>
    )
}

export default SecondayMenu
