import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import SubTitle from '../components/subTitle/SubTitle'
import MemberPlayer from '../components/newMemberPlayer/MemberPlayer'
import Beliefs  from '../components/beliefs/Beliefs'
import GetOurApp from '../components/GetOurApp/GetOurApp'
import CallToAction from '../components/callToAction/CallToAction'
import SendUsMessage from '../components/SendUsMessage/SendUsMessage'
import Footer from '../components/footer/Footer'

import banner from './all-images/plant.jpg'
import cross2 from './about-images/cross2.jpg'
import playerbg from './all-images/pastor.jpg'

const beliefApi =  'https://church.aftjdigital.com/api/belief/new-life';



function NewLifeInChrist() {

    const [beliefData, setBeliefData] = useState([]);

    const getBeliefs = async () => {
        const response = await axios.get(beliefApi);
        const allBeliefs = response.data.data;
        

        setBeliefData(allBeliefs);

    }

    useEffect(() => {
       getBeliefs();
    }, [])


    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'NEW LIFE IN CHRIST.'}  image ={banner} />
            <MemberPlayer image ={playerbg} />
            <SubTitle 
             subheading= {'We are so excited for you as you step into your New Beginning! This is the best decision of your life! We suggest the following next steps to help you grow in your relationship with Christ.'}
            />
            
                {beliefData.map((belief) => {
                   return  <Beliefs  key = {belief.id} 
                    beliefPhoto = {belief.phototop}
                    beliefTitle ={belief.titletop} 
                    beliefBtn = {'Get Started'}  
                    beliefText ={belief.texttop}
                    beliefPortion = {belief.portiontop}
                    beliefPhotoRight = {belief.photobottom}
                    beliefTitleRight = {belief.titlebottom}
                    beliefTextRight ={ belief.textbottom}
                    beliefBtnRight = {'join a group'}
                    beliefPortionRight = {belief.portionbottom}
                    
                    />
                })}
            

            <Beliefs 
            beliefPhoto = {cross2}
             beliefTitle ={'Salvation'}
             beliefText = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
            beliefPortion ={'See 2 Timothy 3 : 16'}
           beliefBtn = {'Download'}
           showBeliefBtnRight={false} showRight ={false}
            />
            <SubTitle 
             subheading= {'We are so excited for you as you step into your New Beginning! This is the best decision of your life! We suggest the following next steps to help you grow in your relationship with Christ.'}
            />
            <SendUsMessage />
          <GetOurApp/>
            <CallToAction />
            <Footer/>

        </div>
    )
}

export default NewLifeInChrist
