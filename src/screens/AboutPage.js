import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import Slider from '../components/slider/Slider'
import AboutPageWelcome from '../components/aboutWelcome/AboutPageWelcome'
import SubTitle  from '../components/subTitle/SubTitle'
import Beliefs  from '../components/beliefs/Beliefs'
import MoreResource  from '../components/moreResource/MoreResource'
import SingleResource  from '../components/singleAboutResource/SingleResource'
import AboutPrayerTab from '../components/NeedPrayers/AboutPrayerTab'
import GetOurApp from '../components/GetOurApp/GetOurApp'
import CallToAction from '../components/callToAction/CallToAction'
import SendUsMessage from '../components/SendUsMessage/SendUsMessage'
import Footer from '../components/footer/Footer'

// image imports
import banner from './about-images/banner.jpg'


const aboutBeliefApi = 'https://church.aftjdigital.com/api/belief/about'
const welcomeApi =  'https://church.aftjdigital.com/api/about/welcome'
const resourceApi =  'https://church.aftjdigital.com/api/about/learn_more'

function AboutPage() {

    const [aboutBeliefData, setAboutBeliefData] = useState([]);
    const [welcomeData, setWelcomeData] = useState([]);
    const [resource, setResource] = useState([]);

    const getAboutBeliefApi = async () => {
        const response = await axios.get(aboutBeliefApi);        
        setAboutBeliefData(response.data.data);
    }

    const getWelcomeApi = async () =>{
        const response = await axios.get(welcomeApi);
        setWelcomeData(response.data.data);
    }
    const getResourceApi = async () =>{
        const response = await axios.get(resourceApi);
        setResource(response.data.data);
    }

    useEffect (() => {
        getAboutBeliefApi();
        getWelcomeApi();
        getResourceApi();
    },[])

    return (
        <div>
            <NavBar/>
            <SecondaryMenu/>
            <Slider title= { 'About Us' } image = {banner}
             sub_title= {'Get to know about our Church and our Beliefs'}/>

            {welcomeData.map((item) => {
               return  <AboutPageWelcome key= {item.id} title = {item.heading}
                image ={item.image} text = {item.text}
                sub_heading={item.service_heading}
                midweek_time ={item.midweek_time} sunday_time={item.sunday_time} btn ={item.btn_text}
                />
            })}


            <SubTitle 
             heading={'What We Believe'}
             subheading= {'At our Church, we base all our beliefs on the authority of the Scripture. In every way, we strive to maintain Biblical of living and leadership. We believe that living life according to God’s word is the way to an abundant, fulfilling life.'}
             
            />
           {aboutBeliefData.map((belief) => {
                   return  <Beliefs  key = {belief.id} 
                    beliefPhoto = {belief.phototop}
                    beliefTitle ={belief.titletop}  
                    beliefText ={belief.texttop}
                    beliefPortion = {belief.portiontop}
                    beliefPhotoRight = {belief.photobottom}
                    beliefTitleRight = {belief.titlebottom}
                    beliefTextRight ={ belief.textbottom}
                    beliefPortionRight = {belief.portionbottom}
                    showBeliefBtn={false}
                     showBeliefBtnRight={false}
                    />
                })}
            
            {resource.map((item) => {
               return <SingleResource image = {item.image} key ={item.id}
               text ={item.text} heading= {item.heading} btn1 ={item.btn_text} btn2 ={item.btn_text2}
               />
            } )}


            <MoreResource/>
            <AboutPrayerTab/>
            
            <SendUsMessage />
            <GetOurApp/>
            <CallToAction />
            <Footer/>
        </div>
    )
}

export default AboutPage
