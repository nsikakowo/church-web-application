import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links } from './data';
import { NavLink } from 'react-router-dom'
import logo from './logo.png';
import {  FaSearch } from 'react-icons/fa';
import {  GiShoppingCart } from 'react-icons/gi'
import './navbar.css'

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);


  


  return (
    <nav id='primary-nav'>
      <div className='nav-center'>
        <div className='nav-header'><NavLink to ='/'>
          <img src={logo} className='logo' alt='logo' /></NavLink>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <NavLink to={url} key={id} activeClassName='main-active' >{text}
                </NavLink>
              );
            })}
          </ul>
        
        <ul className='social-icons'>
            <li onClick={() => setActive(!active)} >
             


             <FaSearch />
              </li>
          <li> <NavLink to = './emptycart' style={{margin:'0'}}> <GiShoppingCart /></NavLink></li>
          <input type="search" 
              name="search" 
              id="search" 
              placeholder='Search...'
              className = {active ? 'search active' : 'search'}
              
              />
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
