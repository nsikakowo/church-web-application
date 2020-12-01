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

function AboutPage() {
    return (
        <div>
            <NavBar/>
            <SecondaryMenu/>
            <Slider heading= { 'About Us' } 
             tagline= {'Get to know about our Church and our Belifes'}/>
            <AboutPageWelcome />
            <SubTitle 
             heading={'What We Believe'}
             subheading= {'At our Church, we base all our beliefs on the authority of the Scripture. In every way, we strive to maintain Biblical of living and leadership. We believe that living life according to God’s word is the way to an abundant, fulfilling life.'}
             
            />
            <Beliefs 
             beliefTitle ={'The Bible'}
             beliefText = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
            beliefPortion ={'See 2 Timothy 3 : 16'}
            beliefTitleRight ={'The Trinity'}
            beliefTextRight = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
           beliefPortionRight ={'See Matthew 3 : 16'}

            />
            <Beliefs 
             beliefTitle ={'Salvation'}
             beliefText = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
            beliefPortion ={'See 2 Timothy 3 : 16'}
            beliefTitleRight ={'water baptism'}
            beliefTextRight = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
           beliefPortionRight ={'See Matthew 3 : 16'}

            />
            <Beliefs 
             beliefTitle ={'communion'}
             beliefText = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
            beliefPortion ={'See 2 Timothy 3 : 16'}
            beliefTitleRight ={'Relationship with god'}
            beliefTextRight = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
           beliefPortionRight ={'See John 3 : 16'}

            />
            <SingleResource />
            <NeedPrayers />
            
            <GetOurApp/>
            <CallToAction />
            <SendUsMessage />
            <Footer/>
        </div>
    )
}

export default AboutPage
