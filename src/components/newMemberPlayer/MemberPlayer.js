import React from 'react'

import { FiPlay } from "react-icons/fi";
import './memberPlayer.css'

function MemberPlayer(props) {

    const {image, showOverlay =true, h5, p, icon, icon2} = props;
    return (
        <div className='player-container'>
                        <div className="play-icon">
                            <FiPlay />
                        </div>
            <div className="player-image-box">
                    <div className="player-image">
                    {showOverlay && <div className="player-overlay"> 
                            <div className="left-arrow"> {icon}  </div>
                            <div className="right-arrow"> {icon2} </div>
                         </div>}
                            <img src={image} alt="player"/>
                       
                    </div>

                    {showOverlay && <div className="left">
                        <h5>{h5} </h5>
                        <p> {p} </p>
                    </div>}
                    
                </div>
        </div>
    )
}

export default MemberPlayer
