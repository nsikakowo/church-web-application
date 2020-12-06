import React from 'react'
import Church from './church.jpg'
import City from './city.jpg'
// import World from './world.jpg'
import './ourMission.css';

function OurMission() {
    return (
        <div className='mission-container'>
            <h2>Our Mission</h2>
            <div className="missions">
                <div className="mission">
                    <div className="feature-photo">
                        <img src={Church} alt="church"/>
                    </div>
                    <h3>Serve the Church</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type</p>
                        <button>Learn More</button>
                </div>
                <div className="mission">
                <div className="feature-photo">
                <img src={City} alt="city"/>
                </div>
                    <h3>Serve the City</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type</p>
                        <button>Learn More</button>
                </div>
                <div className="mission">
                <div className="feature-photo">
                <img src='https://mk0journeyonlinx1ufs.kinstacdn.com/wp-content/uploads/sites/5/2020/07/joel-muniz-BErJJL_KsjA-unsplash-1024x683.jpg' alt="world"/>
                </div>
                    <h3>Serve the World</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type</p>
                        <button>Learn More</button>
                </div>
                
            </div>
        </div>
    )
}

export default OurMission
