import React, {useEffect, useState} from 'react'
import axios from 'axios';
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import ConnectGroup from '../components/connectGroups/ConnectGroup'


// import InfoBoard from '../components/infoBoard/InfoBoard'
import Footer from '../components/footer/Footer'

import banner from './all-images/building.jpg'
import './getdirections.css'



function GetDirections() { 

    const [details, setDetails] = useState([]);

    const getDetails = async () => {
        const response = await axios.get('https://church.aftjdigital.com/api/location-connect');
        setDetails(response.data.data)
    }

    useEffect(() => {
        getDetails();
    }, [])

    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'LOCATION & DIRECTION'} image = {banner}
            tagline = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '} />
            <div className="google-map-box">
                <h2>Get Directions from your location</h2>
                <div className="map-container"></div>
                <button className='btn-outline'>GET DRIVING DIRECTIONS</button>
            </div>
            <div className="group-title">
                <h2>transportation</h2>
                <p>No car? No problem. With bus stops within walking distance 
                    and a large circle drive, Our Church can accommodate several 
                    transportation methods.</p>
            </div>
            {details.map((item) => {
                return (

                    <ConnectGroup groupTitle= {item.title}  key ={item.id}
                    groupText ={item.text}
                    groupBtn = {'JOIN A TEAM'} showConnectBtn = {false} groupPhoto = {item.image}
                    
                    />
                )
            })}
           
            
            <Footer/>

        </div>
    )
}

export default GetDirections
