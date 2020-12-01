import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import Slider from '../components/slider/Slider'
import SubTitle from '../components/subTitle/SubTitle'
import ConnectGroup from '../components/connectGroups/ConnectGroup'
import photo from '../components/connectGroups/photo.jpg'
import cell from '../components/connectGroups/cell.jpg'
import Give from '../components/connectGroups/give.jpg'
import mission from '../components/connectGroups/mission.jpg'
import CallToAction from '../components/callToAction/CallToAction'
import SendUsMessage from '../components/SendUsMessage/SendUsMessage'
import Footer from '../components/footer/Footer'

function Connect() {
    return (
        <div>
            <NavBar/>
            <SecondaryMenu/>
            <Slider heading= { 'Connect' } 
             tagline= {'The best way to be connected here is through service.'}/>
            <SubTitle 
             heading={'HOW TO GET CONNECTED'}
             subheading= {'One of the best ways you can get connected and build a strong relationship at our Church is by joining'}
             littleHead={'A TEAM or GROUP'}
            />

            <ConnectGroup groupTitle= {'Join Our Volunteer Team'} 
            groupText ={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
            groupBtn = {'JOIN A TEAM'}
            groupPhoto = {photo}
            />
           
            <ConnectGroup groupTitle= {'Join A Home Cell Group '} 
            groupText ={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Click Here to find a Home Cell Group that fits your interest, or email us at homecell@ourchurch.org'}
            groupBtn = {'JOIN A GROUP'}
            groupPhoto = {cell}
            />

            <ConnectGroup groupTitle= {'Give '} 
            groupText ={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Click Here to find a Home Cell Group that fits your interest'}
            groupBtn = {'Give'}
            groupPhoto = {Give}
            />
            <ConnectGroup groupTitle= {'Mission '} 
            groupText ={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Click Here to find a Home Cell Group that fits your interest'}
            groupBtn = {'Learn More'}
            groupPhoto = {mission}
            />
            <CallToAction />
            <SendUsMessage />
            <Footer/>
        </div>
    )
}

export default Connect
