import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import HomeSlider from '../Apis/homeSlider/Homeslider'
import FeatureBox from '../components/featuredBox/FeatureBox'
import PastorIntro from '../components/pastorIntro/PastorIntro'
import WordPlayer from '../components/WordPlayer/WordPlayer'
import MessageSinglePlayer from '../components/MessageSinglePlayer/MessageSinglePlayer'
import UpcomingEvents from '../components/upcomingEvents/UpcomingEvents'
import HomePrayerTab from '../components/NeedPrayers/HomePrayerTab'
import GetOurApp from '../components/GetOurApp/GetOurApp'
import CallToAction from '../components/callToAction/CallToAction'
import Footer from '../components/footer/Footer'



function HomePage() {
    return (
        <div>
             {/* <NavBar/> */}
            {/* <SecondaryMenu/> */}
            <HomeSlider />
            <FeatureBox/>
            <PastorIntro />
            {/* <WordPlayer /> */}
            <UpcomingEvents />  
            <MessageSinglePlayer />
            <HomePrayerTab/>
            <GetOurApp/>
            <CallToAction />
            <Footer/>
            
        </div>
    )
}

export default HomePage
