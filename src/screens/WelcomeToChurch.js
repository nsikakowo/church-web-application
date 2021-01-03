import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import SubTitle from '../components/subTitle/SubTitle'
import MemberPlayer from '../components/newMemberPlayer/MemberPlayer'
import InfoBoard from '../components/infoBoard/InfoBoard'
import FullWidthInfoBoard from '../components/fullWidthInfoBoard/FullWithInfoBoard'
import CallToAction from '../components/callToAction/CallToAction'

import Footer from '../components/footer/Footer'
import bg from '../components/callToAction/bg.jpg'
import banner from './all-images/choir.jpg'
import playerbg from './all-images/pastor.jpg'
import welcome from './all-images/contact.jpg'
import join from './all-images/event.jpg'
import backtochurch from './all-images/homecell.jpg'

function WelcomeToChurch() {
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={''} image = {banner} >
                <h1 style = {{textAlign:'center', fontSize:'5.5rem', width:'40%', display:'flex', justifyContent:'center',
                alignSelf:'center', fontStyle:'italic'
            }}>New Life in Christ</h1>
            </SingleSlider>
            <SubTitle 
             heading={'Expect Great Things'}
             subheading= {'Our heart is to help you reach your full God given potential. If you\'re ever in the our area, come visit us. As Pastor Davids says, we\'ll make sure you feel right at home.'}
            />
            <MemberPlayer image ={playerbg} />
            <SubTitle heading={'EVERYONE\'S WELCOME AT OUR CHURCH'} />
            <InfoBoard title = {'Welcome To Church'} image = {welcome}
            description = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
            showBtn = {false} 
            />
            <FullWidthInfoBoard title= {'Powerful Worship'} image = {bg} 
            description = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}  />
           
           <InfoBoard title = {'“Can We Go To Our Church Again?”'} btn = {'view more'} image = {backtochurch}
              description = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque quaerat earum aliquid aspernatur obcaecati molestiae aut eveniet sint amet! Illo minus dolore veritatis, itaque neque eos, vero minima voluptatem iure unde voluptatum exercitationem amet quidem possimus pariatur, autem fuga ipsum saepe ducimus? Totam modi assumenda    debitis earum vero accusamus!'}
            
            />
            <FullWidthInfoBoard title= {'Join Us This Weekend!'} image = {join} 
            description = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}  />
           <InfoBoard title = {'“Can We Go To Our Church Again?”'} btn = {'view more'} image = {welcome}
              description = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque quaerat earum aliquid aspernatur obcaecati molestiae aut eveniet sint amet! Illo minus dolore veritatis, itaque neque eos, vero minima voluptatem iure unde voluptatum exercitationem amet quidem possimus pariatur, autem fuga ipsum saepe ducimus? Totam modi assumenda    debitis earum vero accusamus!'}
            
            />
           <CallToAction />
            <Footer/>

        </div>
    )
}

export default WelcomeToChurch
