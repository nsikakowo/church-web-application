import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import {NavLink} from 'react-router-dom'
import {  FaSearch } from 'react-icons/fa';
import SalesList from '../components/salesList/SalesList'
import './books.css'
import Footer from '../components/footer/Footer'

//picture imports
// import giving from './giving-images/books.jpg'
import banner from './all-images/gifts.jpg'

function Gifts() {
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'Gifts'}  image ={banner}
             tagline = {'Giving is a biblical principle that when lived by, produces a rich harvest in our lives'} />

             <div className="menu-tab" >
                <ul className='tabs'>
                    <li>
                    <NavLink to='./books' activeClassName='tab-active' >Books  </NavLink>
                    </li>
                    <li>
                    <NavLink to='./series' activeClassName='tab-active' >Series  </NavLink>
                    </li>
                    <li>
                    <NavLink to='./gifts' activeClassName='tab-active' >Gifts   </NavLink>
                    </li>
                   
                    
                </ul>
             </div>
             
                    <form className='book-search'>
                    <button>
                            <FaSearch />
                        </button>
                    <input type="search" name="search" placeholder='Search the Store'/>
                        
                    </form>
            
             <SalesList />
             <SalesList />
             <SalesList />
            
            <Footer/>

        </div>
    )
}

export default Gifts
