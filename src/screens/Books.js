import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import {NavLink} from 'react-router-dom'
import {  FaSearch } from 'react-icons/fa';
import SalesList from '../components/salesList/SalesList'
import AddToCart from '../components/addToCart/AddToCart'
import './books.css'
import Footer from '../components/footer/Footer'

//picture imports
// import giving from './giving-images/books.jpg'
import banner from './all-images/shelf.jpg'

function Books() {
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'Books'}  image= {banner}
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
                    <input type="search" name="search" placeholder='Search All Books'/>
                        
                    </form>
            
             <SalesList />
             <SalesList />
             <SalesList />
                <AddToCart/>
            <Footer/>

        </div>
    )
}

export default Books
