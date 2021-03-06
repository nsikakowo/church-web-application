import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import Slider from '../components/slider/Slider'
import VideoMessages from '../components/videoMessages/VideoMessages'
import AllRecordedMessages from '../components/AllRecordedMessages/AllRecordedMessages'
import CallToAction from '../components/callToAction/CallToAction'
import SendUsMessage from '../components/SendUsMessage/SendUsMessage'
import Footer from '../components/footer/Footer'

import banner from './all-images/pastor.jpg'

function SermonPage() {
    return (
        <div>
            <NavBar/>
            <SecondaryMenu/>
            <Slider title= { 'Watch online' }  image ={banner}
             sub_title= {'Join Our Live Service and a partaker of the Blessing'}/>
            <VideoMessages />
            <AllRecordedMessages />
            <SendUsMessage />
            <CallToAction />
            <Footer/>
        </div>
    )
}

export default SermonPage
