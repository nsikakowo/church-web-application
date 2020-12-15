import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import SubTitle from '../components/subTitle/SubTitle'
import BannerPlayer from '../components/bannerVideoPlayer/BannerPlayer'
import Beliefs  from '../components/beliefs/Beliefs'
import GetOurApp from '../components/GetOurApp/GetOurApp'
import CallToAction from '../components/callToAction/CallToAction'
import SendUsMessage from '../components/SendUsMessage/SendUsMessage'
import Footer from '../components/footer/Footer'

import banner from './all-images/plant.jpg'


function NewLifeInChrist() {
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'NEW LIFE IN CHRIST'}  image ={banner} />
            <BannerPlayer />
            <SubTitle 
             subheading= {'We are so excited for you as you step into your New Beginning! This is the best decision of your life! We suggest the following next steps to help you grow in your relationship with Christ.'}
            />
            <Beliefs 
            beliefBtn = {'Get started'}
             beliefTitle ={'The Bible'}
             beliefText = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
            beliefPortion ={'See 2 Timothy 3 : 16'}
            beliefTitleRight ={'The Trinity'}
            beliefTextRight = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
           beliefPortionRight ={'See Matthew 3 : 16'}
           beliefBtnRight = {'Join A Group'}
            />
            <Beliefs 
             beliefTitle ={'Salvation'}
             beliefText = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
            beliefPortion ={'See 2 Timothy 3 : 16'}
           beliefBtn = {'Download'}
            />
            <SubTitle 
             subheading= {'We are so excited for you as you step into your New Beginning! This is the best decision of your life! We suggest the following next steps to help you grow in your relationship with Christ.'}
            />
          <GetOurApp/>
            <CallToAction />
            <SendUsMessage />
            <Footer/>

        </div>
    )
}

export default NewLifeInChrist
