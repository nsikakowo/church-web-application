import React from 'react'
import { NavLink } from 'react-router-dom';
import './secondaryMenu.css'

function SecondayMenu() {
    return (
        <nav className='secondary-menu'>
            <div className="left-menu">
                <ul>
                    <li> <NavLink to='#' activeClassName='main-active'>Watch Online
                </NavLink></li>
                    <li> <NavLink to='./sermonPage' activeClassName='main-active'>Sermons
                </NavLink></li>
                    <li> <NavLink to='./Connect' activeClassName='main-active'>Connect
                </NavLink></li>
                </ul>
            </div>
            <div className="right-menu">
                <ul>
                <li> <NavLink to='./register' activeClassName='main-active'>Sign Up
                </NavLink></li>
                    <li> <NavLink to='./SignIn' activeClassName='main-active'>Log In
                </NavLink></li>
                    
                </ul>
            </div>
            
        </nav>
    )
}

export default SecondayMenu
