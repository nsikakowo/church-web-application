import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import Donation from '../components/Donation/Donation'
import './givePage.css'
import Footer from '../components/footer/Footer'

//picture imports
import giving from './giving-images/giving.jpg'

function GivePage() {
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'Give'}
             tagline = {'Giving is a biblical principle that when lived by, produces a rich harvest in our lives'} />
            <Donation />
            <div className="giving-details">
                <div className="giving-image">
                    <img src={giving} alt="giving"/>
                </div>
                <div className="giving-content">
                    <h2>Giving is a lifestyle</h2>
                    <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Ratione nesciunt architecto 
                        optio explicabo ducimus impedit asperiores.
                         In voluptatem natus molestias quidem distinctio nulla?
                          Voluptatum, doloribus nemo. Fugit, architecto alias
                           laboriosam maiores cumque neque cum hic soluta 
                           consectetur delectus tempora ad ratione dolorum
                            in ab veniam quisquam, iure voluptatum dicta natus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Ratione nesciunt architecto 
                        optio explicabo ducimus impedit asperiores.
                         In volupttem natus molestias quidem distinctio nulla?
                          Voluptatum, doloribus nemo. Fugit, architecto alias
                           laboriosam maiores cumque neque cum hic soluta 
                           consectetur delectus tempora ad ratione dolorum
                            in ab veniam quisquam, iure voluptatum dicta natus.</p>
                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default GivePage
