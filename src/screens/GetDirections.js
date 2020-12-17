import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import ConnectGroup from '../components/connectGroups/ConnectGroup'


// import InfoBoard from '../components/infoBoard/InfoBoard'
import Footer from '../components/footer/Footer'
// import './contactus.css'

import banner from './all-images/house.jpg'
import photo from './all-images/find.jpg'
// import contact from './all-images/lady.jpg'

import './getdirections.css'

function GetDirections() {
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
            <ConnectGroup groupTitle= {'Bus'} 
            groupText ={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
            groupBtn = {'JOIN A TEAM'} showConnectBtn = {false}
            groupPhoto = {photo}
            />
            <ConnectGroup groupTitle= {'App Based Taxi or Service'} 
            groupText ={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
            groupBtn = {'JOIN A TEAM'} showConnectBtn = {false}
            groupPhoto = {photo}
            />
            
            <Footer/>

        </div>
    )
}

export default GetDirections
