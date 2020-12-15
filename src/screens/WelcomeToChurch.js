import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import SubTitle from '../components/subTitle/SubTitle'
import BannerPlayer from '../components/bannerVideoPlayer/BannerPlayer'
import InfoBoard from '../components/infoBoard/InfoBoard'
import FullWidthInfoBoard from '../components/fullWidthInfoBoard/FullWithInfoBoard'
import CallToAction from '../components/callToAction/CallToAction'

import Footer from '../components/footer/Footer'
import bg from '../components/callToAction/bg.jpg'
import banner from './all-images/choir.jpg'

function WelcomeToChurch() {
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'New Life In Christ'} image = {banner} />
            <SubTitle 
             heading={'Expect Great Things'}
             subheading= {'Our heart is to help you reach your full God given potential. If you\'re ever in the our area, come visit us. As Pastor Davids says, we\'ll make sure you feel right at home.'}
            />
            <BannerPlayer />
            <SubTitle heading={'EVERYONE\'S WELCOME AT OUR CHURCH'} />
            <InfoBoard title = {'Welcome To Church'}
            description = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque quaerat earum aliquid aspernatur obcaecati molestiae aut eveniet sint amet! Illo minus dolore veritatis, itaque neque eos, vero minima voluptatem iure unde voluptatum exercitationem amet quidem possimus pariatur, autem fuga ipsum saepe ducimus? Totam modi assumenda    debitis earum vero accusamus!'}
            
            />
            <FullWidthInfoBoard title= {'Powerful Worship'} image = {bg} 
            description = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}  />
           
           <InfoBoard title = {'“Can We Go To Our Church Again?”'} btn = {'view more'}
              description = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque quaerat earum aliquid aspernatur obcaecati molestiae aut eveniet sint amet! Illo minus dolore veritatis, itaque neque eos, vero minima voluptatem iure unde voluptatum exercitationem amet quidem possimus pariatur, autem fuga ipsum saepe ducimus? Totam modi assumenda    debitis earum vero accusamus!'}
            
            />
            <FullWidthInfoBoard title= {'Join Us This Weekend!'} image = {bg} 
            description = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}  />
           <InfoBoard title = {'“Can We Go To Our Church Again?”'} btn = {'view more'}
              description = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque quaerat earum aliquid aspernatur obcaecati molestiae aut eveniet sint amet! Illo minus dolore veritatis, itaque neque eos, vero minima voluptatem iure unde voluptatum exercitationem amet quidem possimus pariatur, autem fuga ipsum saepe ducimus? Totam modi assumenda    debitis earum vero accusamus!'}
            
            />
           <CallToAction />
            <Footer/>

        </div>
    )
}

export default WelcomeToChurch
