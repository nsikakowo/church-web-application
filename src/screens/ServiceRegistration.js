import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import SubTitle  from '../components/subTitle/SubTitle'

import Footer from '../components/footer/Footer'
import banner from './all-images/church.jpg'
import './reg.css'


function ServiceRegistration() {
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider image ={banner} />
            <SubTitle 
             heading={'Select Preferred Service'}
             subheading= {'Kindly fill the form below to get a seat at your preferred service.'}
            />
            <div className="reg-container">
              <form className='service-form'>
                <label htmlFor="fullName">Full Name:<br/>
                <input type="text" name="fullName" id="fullName" placeholder='Enter Full Name'/></label>
                <label htmlFor="email">Email:<br/>
                <input type="email" name="email" id="email" placeholder='Enter Email'/></label>
                <label htmlFor="contact">Contact Number:<br/>
                <input type="text" name="contact" id="contact" placeholder='Enter Contact Number'/></label>
                <label htmlFor="home">Home Address:<br/>
                <input type="text" name="home" id="home" placeholder='Enter Home Address'/></label>

                
                <label>Select Service:</label>
                <select name="times" id="times"> 
                    <option value="first-service">First Service</option>
                    <option value="second-service">Second Service</option>
                    <option value="third-service">Third Service</option>
                </select>
                <label>Other Family Members:</label>
               <input type="number" name="family" id="family"/>

            <p id='disclaimer'>If you are not feeling well we ask that you please stay at home, get some rest and join us online. It is mandatory for every member to wear a face mask! *</p>
             <div className="agree">   
             <input type="checkbox" name="agreement" id="agreement"/> 
              <label>
            I have not been out of the country or to a high COVID-19 infected area in the 
            last 14 days. I have not experienced any symptoms of COVID-19 in the last 14 days.
            I will strictly adhere to social distance practices while on church premises.</label>
            </div>  
                    <button className='btn-primary'>Submit</button>

            </form>  
            </div>
            <Footer/>

        </div>
    )
}

export default ServiceRegistration
