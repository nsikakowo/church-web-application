import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import Slider from '../components/slider/Slider'
import VideoMessages from '../components/videoMessages/VideoMessages'
import AllRecordedMessages from '../components/AllRecordedMessages/AllRecordedMessages'
import CallToAction from '../components/callToAction/CallToAction'
import SendUsMessage from '../components/SendUsMessage/SendUsMessage'
import Footer from '../components/footer/Footer'

function SermonPage() {
    return (
        <div>
            <NavBar/>
            <SecondaryMenu/>
            <Slider heading= { 'Watch online' } 
             tagline= {'Join Our Live Service and a partaker of the Blessing'}/>
            <VideoMessages />
            <AllRecordedMessages />
            <CallToAction />
            <SendUsMessage />
            <Footer/>
        </div>
    )
}

export default SermonPage
