import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import HomeSlider from '../Apis/homeSlider/Homeslider'
import FeatureBox from '../components/featuredBox/FeatureBox'
import PastorIntro from '../components/pastorIntro/PastorIntro'
// import OurMission from '../components/ourMission/OurMission'
import MessageSinglePlayer from '../components/MessageSinglePlayer/MessageSinglePlayer'
import UpcomingEvents from '../components/upcomingEvents/UpcomingEvents'
import Loading from '../components/loading/Loading'


import HomePrayerTab from '../components/NeedPrayers/HomePrayerTab'
// import Testimony from '../components/Testimony/Testimony'
import GetOurApp from '../components/GetOurApp/GetOurApp'
import CallToAction from '../components/callToAction/CallToAction'
// import SendUsMessage from '../components/SendUsMessage/SendUsMessage'
import Footer from '../components/footer/Footer'



function HomePage() {
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <HomeSlider />
            <FeatureBox/>

            <PastorIntro />
            {/* <OurMission/> */}
            <MessageSinglePlayer />
            <UpcomingEvents /> 
            
            
            <HomePrayerTab/>

            {/* <Testimony /> */}
            {/* <SendUsMessage /> */}
            <GetOurApp/>
            <CallToAction />
            <Footer/>
            <Loading/>
        </div>
    )
}

export default HomePage
