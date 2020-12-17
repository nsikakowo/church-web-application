import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'

import Beliefs  from '../components/beliefs/Beliefs'

// import InfoBoard from '../components/infoBoard/InfoBoard'
import Footer from '../components/footer/Footer'
import './contactus.css'

import banner from './all-images/contactus.jpg'
import find from './all-images/find.jpg'
import contact from './all-images/lady.jpg'


function ContactUs() {
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'contact us'} image = {banner}
            tagline = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '} />
            
            <Beliefs 
            beliefPhoto = {find}
            beliefPhotoRight = {contact}
             beliefTitle ={'We Want To Hear From You'}
             beliefText = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
            beliefBtn = {'click for directions'}
            showBeliefBtnRight = {false}

            />
            <div className="contact-form">
                <h3>Email Us</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
                    an unknown printer took a galley of type and scrambled it 
                    to make a type specimen book. </p>
                    <form className='main-form'>
                        <label htmlFor="firstname">
                            First Name: <br/>
                            <input type="text" name="firstname" placeholder='Enter First Name' />
                        </label>
                        <label htmlFor="lastname">
                            Last Name: <br/>
                            <input type="text" name="lastname" placeholder='Enter Last Name'/>
                        </label>
                        <label htmlFor="firstname">
                           Email Address: <br/>
                            <input type="email" name="email" placeholder='Enter Email Address' />
                        </label>

                        <label htmlFor="topic">Choose what topic your inquiry is related to: <br/>
                            <select name="topic" >
                                <option value="counselling">Counselling</option>
                                <option value="prayer">Prayer Request</option>
                                <option value="care">Pastoral Care</option>
                                <option value="missions">Missions</option>
                            </select>
                        </label>
                        <label htmlFor="comment">
                        Enter question or comment below: <br/>
                        <textarea name="comment"cols="30" rows="10"></textarea>
                        </label>
                        <button className='btn-primary'>submit</button>
                    </form>
            </div>
            
            <Footer/>

        </div>
    )
}

export default ContactUs
