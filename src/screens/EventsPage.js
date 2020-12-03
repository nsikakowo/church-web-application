import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import Slider from '../components/slider/Slider'
import SubTitle from '../components/subTitle/SubTitle'
import Events from '../components/eventsComponent/Events'

import CallToAction from '../components/callToAction/CallToAction'
import Footer from '../components/footer/Footer'

function EventsPage() {
    return (
        <div>
<NavBar/>
            <SecondaryMenu/>
            <Slider heading= { 'Attend Our Events' } 
             tagline= {'We have a veriaty of weekly events to support you.'}/>
            <SubTitle 
             heading={'Scheduled Event'}
             subheading= {'Here are some of our upcoming events. Use the filter below to help find the event you are interested in.'}
            
            />
            <Events />
            <SubTitle 
             heading={'JOIN OUR ONLINE EXPERIENCE'}
             subheading= {'Tune in for an encouraging message and uplifting worship during regular service times, right from the comfort of your home. We are excited for you to join us for this experience via your phone, smart TV or computer.'}
            
            > </SubTitle>
            <CallToAction />
            
            <Footer/>
        </div>
    )
}

export default EventsPage
