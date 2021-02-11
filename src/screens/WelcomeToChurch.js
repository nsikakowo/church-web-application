import React, {useEffect, useState} from 'react'
import axios from 'axios';
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import SubTitle from '../components/subTitle/SubTitle'
import MemberPlayer from '../components/newMemberPlayer/MemberPlayer'
import InfoBoard from '../components/infoBoard/InfoBoard'
import WelcomeBoard from '../components/fullWidthInfoBoard/WelcomeBoard'
import JoinUsBoard from '../components/fullWidthInfoBoard/JoinUsBoard'
import CallToAction from '../components/callToAction/CallToAction'

import Footer from '../components/footer/Footer'

import banner from './all-images/choir.jpg'
import playerbg from './all-images/pastor.jpg'


function WelcomeToChurch() {

  const [info, setInfo] = useState([]);
  
  const getInfo = async () => {
    const response = await axios.get('https://church.aftjdigital.com/api/home/info-board');
    setInfo(response.data.data);
  }

    useEffect(() => {
        document.title = "Welcome To Church";
        getInfo();
      }, []);

    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'The Experience'} image = {banner}  tagline ={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque quaerat earum aliquid aspernatur obcaecati'}>
                
            </SingleSlider>
            <SubTitle 
             heading={'Expect Great Things'}
             subheading= {'Our heart is to help you reach your full God given potential. If you\'re ever in the our area, come visit us. As Pastor Davids says, we\'ll make sure you feel right at home.'}
            />
            <MemberPlayer image ={playerbg} />
            <SubTitle heading={'EVERYONE\'S WELCOME AT OUR CHURCH'} />

            {info.map((item, i) => {
              if(i === 0){
                return (
                  <InfoBoard title = {item.title} image = {item.image} key ={item.id}
                  description = {item.description}
                  showBtn = {false} 
                  />
                )
              }
            })}
           

            <JoinUsBoard/>
            {info.map((item, i) => {
              if(i === 1){
                return (
                  <InfoBoard title = {item.title} image = {item.image} key ={item.id}
                  description = {item.description}
                  showBtn = {false} 
                  />
                )
              }
            })}
            <WelcomeBoard />
            {info.map((item, i) => {
              if(i === 2){
                return (
                  <InfoBoard title = {item.title} image = {item.image} key ={item.id}
                  description = {item.description}
                  showBtn = {false} 
                  />
                )
              }
            })}
           <CallToAction />
            <Footer/>

        </div>
    )
}

export default WelcomeToChurch
