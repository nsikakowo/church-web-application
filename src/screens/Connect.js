import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import Slider from '../components/slider/Slider'
import SubTitle from '../components/subTitle/SubTitle'
import ConnectGroup from '../components/connectGroups/ConnectGroup'
import CallToAction from '../components/callToAction/CallToAction'
import SendUsMessage from '../components/SendUsMessage/SendUsMessage'
import Footer from '../components/footer/Footer'

// picture imports
import banner from './all-images/contact.jpg'

//Connect Group Api
const connectUrl ='https://church.aftjdigital.com/api/home/connect'


function Connect() {

    const [connectData, setConnectData] = useState([]);

    const getConnect = async () => {
        const response = await axios.get (connectUrl);
        setConnectData(response.data.data);
    }

    useEffect(() => {
      getConnect();
    }, [])

    return (
        <div>
            <NavBar/>
            <SecondaryMenu/>
            <Slider title= { 'Connect' } image = {banner}
             sub_title = {'The best way to be connected here is through service.'}/>
            <SubTitle 
             heading={'HOW TO GET CONNECTED'}
             subheading= {'One of the best ways you can get connected and build a strong relationship at our Church is by joining'}
             littleHead={'A TEAM or GROUP'}
            />
            {connectData.map((item) => {
                return <ConnectGroup key = {item.id}  
                groupText ={item.text} groupPhoto={item.image} 
                groupTitle={item.title} groupBtn ={item.btn_text}/>
            })}

            
            <SendUsMessage />
            <CallToAction />
            <Footer/>
        </div>
    )
}

export default Connect
