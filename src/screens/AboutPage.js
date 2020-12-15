import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import Slider from '../components/slider/Slider'
import AboutPageWelcome from '../components/aboutWelcome/AboutPageWelcome'
import SubTitle  from '../components/subTitle/SubTitle'
import Beliefs  from '../components/beliefs/Beliefs'
import SingleResource  from '../components/singleAboutResource/SingleResource'
import NeedPrayers from '../components/NeedPrayers/NeedPrayers'
import GetOurApp from '../components/GetOurApp/GetOurApp'
import CallToAction from '../components/callToAction/CallToAction'
import SendUsMessage from '../components/SendUsMessage/SendUsMessage'
import Footer from '../components/footer/Footer'

// image imports
import bible from './about-images/bible.jpg'
import cross1 from './about-images/cross1.jpg'
import cross2 from './about-images/cross2.jpg'
import baptism from './about-images/baptism.jpg'
import communion from './about-images/communion.jpg'
import relationship from './about-images/relationship.jpg'
import pray from './about-images/pray.jpg'
import boy from './about-images/boy.jpg'
import sea from './about-images/sea.jpg'
import women from './about-images/women.jpg'

function AboutPage() {
    return (
        <div>
            <NavBar/>
            <SecondaryMenu/>
            <Slider title= { 'About Us' } 
             sub_title= {'Get to know about our Church and our Belifes'}/>
            <AboutPageWelcome  image = {women}/>
            <SubTitle 
             heading={'What We Believe'}
             subheading= {'At our Church, we base all our beliefs on the authority of the Scripture. In every way, we strive to maintain Biblical of living and leadership. We believe that living life according to God’s word is the way to an abundant, fulfilling life.'}
             
            />
            <Beliefs 
            beliefPhoto = {bible}
            beliefPhotoRight ={cross1}
             beliefTitle ={'The Bible'}
             beliefText = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
            beliefPortion ={'See 2 Timothy 3 : 16'}
            beliefTitleRight ={'The Trinity'}
            beliefTextRight = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
           beliefPortionRight ={'See Matthew 3 : 16'}
           showBeliefBtn={false}
            />
            <Beliefs 
            beliefPhoto = {cross2}
            beliefPhotoRight ={baptism}
             beliefTitle ={'Salvation'}
             beliefText = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
            beliefPortion ={'See 2 Timothy 3 : 16'}
            beliefTitleRight ={'water baptism'}
            beliefTextRight = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
           beliefPortionRight ={'See Matthew 3 : 16'}
           showBeliefBtn={false}
            />
            <Beliefs 
            beliefPhoto = {communion}
            beliefPhotoRight ={relationship}
             beliefTitle ={'communion'}
             beliefText = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
            beliefPortion ={'See 2 Timothy 3 : 16'}
            beliefTitleRight ={'Relationship with god'}
            beliefTextRight = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
           beliefPortionRight ={'See John 3 : 16'}
           showBeliefBtn={false}
            />
            <SingleResource image = {pray} />
            <NeedPrayers  
            title = {'Experience'}
            text = {'Our enviroment is casual and we simply want you to come as are to our Gatherings. You don’t need to be put together with us to do life. If you are on the fence at all, we want you to hear us say .....JUST COME! We remind ourselves a lot around here that we are REAL people, with REAL problems and a REAL HOPE.'}
            btn1 = {'Join Us'}
            title2 = {'kids'}
            text2 = {'We love kids. If you are planning on bringing your children with you, we think that’s awesome. Taking care of your children & providing an amazing experience for them is one of our greatest values. You’ll want to give yourself a few extra minutes, especially if you’re a first time guest, to get your kids checked into their respective environments.'}
            btn2 = {'join us'}
            photo = {sea}
            photo2 = {boy}
            />
            
            <GetOurApp/>
            <CallToAction />
            <SendUsMessage />
            <Footer/>
        </div>
    )
}

export default AboutPage
