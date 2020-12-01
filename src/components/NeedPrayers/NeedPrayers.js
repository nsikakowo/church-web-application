import React from 'react'
import prayer from './praying.jpg'
import chat from './chat-group.jpg'
import './needPrayes.css'

function NeedPrayers() {
    return (
        <div className='needPrayers'>
            <div className="prayers">
                <div className="photo">
                    <img src={prayer} alt="join-prayer"/>
                </div>
                <div className="write-up">
                <div className="content">
                  <h3>  Need Prayer? <br/> we will Pray for you</h3>
                  <p>Need prayer? We would love
                       to pray along with you. You can send us a message for prayer.</p>
                       <button className='btn-outline'>Send Us a Message</button>
                       </div>
                </div>
            </div>
            <div className="prayers" id = 'chat'>
               
                <div className="write-up">
                <div className="content">
                  <h3>  Need Prayer? <br/> we will Pray for you</h3>
                  <p>Need prayer? We would love
                       to pray along with you. You can send us a message for prayer.</p>
                       <button className='btn-outline'>Send Us a Message</button>
                       </div>
                </div>
                <div className="photo">
                    <img src={chat} alt="join-prayer"/>
                </div>
            </div>
        </div>
    )
}

export default NeedPrayers
