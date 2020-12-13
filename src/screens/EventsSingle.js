import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import SubTitle from '../components/subTitle/SubTitle'
import InfoBoard from '../components/infoBoard/InfoBoard'
import EventSummaryBanner from '../components/eventSummaryBanner/EventSummaryBanner'

import SendUsMessage from '../components/SendUsMessage/SendUsMessage'
import Footer from '../components/footer/Footer'

import './eventSingle.css'

function EventsSingle() {
    
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider    heading ={'COUPLES CONFRENCE 2020'} tagline = {'Together Forever | July 21th - 31st  '} />
            <SubTitle  heading={'The Relationship You Have Been Longing For  '}
             
               subheading = {'Jesus tells us in John 15:17, “This is what I command you: that you love and unselfishly seek the best for one another.” God created marriage and He knew we will have a life-giving marriage when we put each other first. Spark 2020 will feature the most powerful segments that have occurred over the last 5 years and there will also be a few surprises along the way! Spark 2020 will help you have a marriage full of life, joy, and peace.'}>
                    <p> Don’t miss this opportunity to learn how to love your spouse the right way, 
                        have a breakthrough in your finances, gain the tools to cover your spouse, 
                        learn effective communication, create a marriage game plan, and more. 
                        Get ready to light a fire in your relationship with this FREE online conference.
                         **If you had already paid for Spark 2020, you will receive an email soon 
                         to give you options for a refund. 
                        You can also choose to let it secure your tickets for Spark 2021!</p>
                </SubTitle>


                <article className='bible-portion'>
                    <p>"This is what I command you: 
                        that you love and unselfishly seek the 
                        best for one another." John 15:17 AMP</p>
                </article>

                <SubTitle  heading={'Speakers '} />
                <InfoBoard title = {'David and Tamara Simpsons'} showBtn = {false}
            description = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}>
            
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   It has survived not only five 
                 centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                 </p>  </InfoBoard>
                    <EventSummaryBanner />
                 <SendUsMessage />
            <Footer/>
        </div>
    )
}

export default EventsSingle
