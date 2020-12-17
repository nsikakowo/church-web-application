import React from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { FiPlay } from "react-icons/fi";
import './memberPlayer.css'

function MemberPlayer(props) {

    const {image} = props;
    return (
        <div className='player-container'>
                        <div className="play-icon">
                            <FiPlay />
                        </div>
            <div className="player-image-box">
                    <div className="player-image">
                        <div className="player-overlay"> 
                            <div className="left-arrow"> <RiArrowLeftSLine/>  </div>
                            <div className="right-arrow"> <RiArrowRightSLine/> </div>
                         </div>
                            <img src={image} alt="player"/>
                       
                    </div>

                    <div className="left">
                        <h5>Session One </h5>
                        <p> A New Beginning </p>
                    </div>
                    
                </div>
        </div>
    )
}

export default MemberPlayer
