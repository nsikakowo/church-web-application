import React from 'react';
import {quicklinks, connect, more} from './data'
import { NavLink } from 'react-router-dom'
import {FaFacebook, FaTwitter, FaInstagram, FaGoogle} from 'react-icons/fa';

import './footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-row">
                <div className="widget1">
                    <h4>Quick Links</h4>
                    <ul>
                    {quicklinks.map((link) => {
              const { id, url, text } = link;
              return (
                <NavLink to={url} key={id} activeClassName='main-active' >{text}
                </NavLink>
              );
            })}
                    </ul>
                </div>
                <div className="widget2">
                <h4>Connect</h4>
                <ul>
                {connect.map((link) => {
              const { id, url, text } = link;
              return (
                <NavLink to={url} key={id} activeClassName='main-active' >{text}
                </NavLink>
              );
            })}
                    </ul>
                </div>
                <div className="widget3">
                <h4>More</h4>
                <ul>
                {more.map((link) => {
              const { id, url, text } = link;
              return (
                <NavLink to={url} key={id} activeClassName='main-active' >{text}
                </NavLink>
              );
            })}
                    </ul>
                </div>
                <div className="widget4">
                    <div className="contact">
                <h4>Contact</h4>
                <p>3000 Macedonian Road, Power Springs, Atlanta,
                United States of America</p>
                <p> <span>Email:</span> info@aftjdigital.com </p>
                <p> <span>Phone:</span> +1 2531546077 </p>
                </div>

                <div className="social-media-contact">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><FaFacebook/></li>
                        <li><FaInstagram/></li>
                        <li><FaTwitter /></li>
                        <li><FaGoogle/></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="copyright">
                <p> &copy; Copyright 2020. AFTJ Digital. All Rights Reserved</p>
            </div>
            
        </footer>
    )
}

export default Footer
