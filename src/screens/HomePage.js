import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import HomeSlider from '../Apis/homeSlider/Homeslider'
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
            <HomeSlider />
            <FeaturedBox />
            <PastorIntro />
            <OurMission/>
            <MessageSinglePlayer />
            <UpcomingEvents /> 
            
            <NeedPrayers  
            title = {'Need Prayer? we will Pray for you' }
            text = {'Need prayer? We would love to pray along with you. You can send us a message for prayer.'}
            btn1 = {'Send Us a Message'}
            title2 = {'Want to Share Thoughts?  Join Our Chat Group! '}
            text2 = {'Do you have something that is troubling you and you want to share? Share your thoughts on our audio chat group.'}
            btn2 = {'JOIN OUR CHAT GROUP'}
            photo = {'https://img.freepik.com/free-photo/beautiful-young-black-woman-stands-meditative-pose-enjoys-peaceful-atmosphere-holds-hands-praying-gesture_273609-19132.jpg?size=626&ext=jpg'}
            photo2 = {'https://img.freepik.com/free-photo/group-multiethnic-creative-business-people-working-project-having-brainstorming-meeting-team-work-brainstorming-concept_58466-12409.jpg?size=626&ext=jpg'}
            />

            <Testimony />
            <GetOurApp/>
            <CallToAction />
            <SendUsMessage />
            <Footer/>
        </div>
    )
}

export default HomePage
