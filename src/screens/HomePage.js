import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import Slider from '../components/slider/Slider'
import FeaturedBox from '../components/featuredBox/FeaturedBox'
import PastorIntro from '../components/pastorIntro/PastorIntro'
import OurMission from '../components/ourMission/OurMission'
import MessageSinglePlayer from '../components/MessageSinglePlayer/MessageSinglePlayer'
import UpcomingEvents from '../components/upcomingEvents/UpcomingEvents'
import NeedPrayers from '../components/NeedPrayers/NeedPrayers'
import Testimony from '../components/Testimony/Testimony'
import GetOurApp from '../components/GetOurApp/GetOurApp'
import CallToAction from '../components/callToAction/CallToAction'
import SendUsMessage from '../components/SendUsMessage/SendUsMessage'
import Footer from '../components/footer/Footer'

function HomePage() {
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <Slider />
            <FeaturedBox />
            <PastorIntro />
            <OurMission/>
            <MessageSinglePlayer />
            <UpcomingEvents />
            <NeedPrayers />
            <Testimony />
            <GetOurApp/>
            <CallToAction />
            <SendUsMessage />
            <Footer/>
        </div>
    )
}

export default HomePage
