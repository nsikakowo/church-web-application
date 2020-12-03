import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import Slider from '../components/slider/Slider'
import SubTitle from '../components/subTitle/SubTitle'
import ServiceEvent from '../components/serviceEventTimes/ServiceEvent'
import UpcomingEvents from '../components/upcomingEvents/UpcomingEvents'
import NeedPrayers from '../components/NeedPrayers/NeedPrayers'
import VideoMessages from '../components/videoMessages/VideoMessages'
import CallToAction from '../components/callToAction/CallToAction'
import SendUsMessage from '../components/SendUsMessage/SendUsMessage'
import Footer from '../components/footer/Footer'

function ServiceTimes() {
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <Slider heading= { 'Service Times' } 
             tagline= {'Take note of our service times and join our services, online & onsite'}/>
            <SubTitle 
             heading={'Our Services'}
             subheading= {'Below you would find our services schedule and our upcoming lineup of speakers. Each service is 90 minutes long and it is packed with uplifting music, powerful worship and inspiring messages.'}
            
            />
            <ServiceEvent />
            <UpcomingEvents />
            <NeedPrayers />
            <VideoMessages />
            <CallToAction />
            <SendUsMessage />
            <Footer/>

        </div>
    )
}

export default ServiceTimes
