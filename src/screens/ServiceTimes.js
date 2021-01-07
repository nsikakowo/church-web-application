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
// import SendUsMessage from '../components/SendUsMessage/SendUsMessage'
import Footer from '../components/footer/Footer'

import banner from './all-images/servicetime.jpg'

function ServiceTimes() {
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <Slider title= { 'Service Times' }  image = {banner}
             sub_title= {'Take note of our service times and join our services, online & onsite'}/>
            <SubTitle 
             heading={'Our Services'}
             subheading= {'Below you would find our services schedule and our upcoming lineup of speakers. Each service is 90 minutes long and it is packed with uplifting music, powerful worship and inspiring messages.'}
            
            />
            <ServiceEvent />
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
            <VideoMessages />
            
            <CallToAction />
            {/* <SendUsMessage /> */}
            <Footer/>

        </div>
    )
}

export default ServiceTimes
