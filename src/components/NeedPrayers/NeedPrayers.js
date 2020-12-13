import React from 'react'
// import prayer from './praying.jpg'
// import chat from './chat-group.jpg'
import './needPrayes.css'

function NeedPrayers() {
    return (
        <div className='needPrayers'>
            <div className="prayers">
                <div className="photo">
                    <img src='https://img.freepik.com/free-photo/beautiful-young-black-woman-stands-meditative-pose-enjoys-peaceful-atmosphere-holds-hands-praying-gesture_273609-19132.jpg?size=626&ext=jpg' alt="join-prayer"/>
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
                  <h3>  Want to Share Thoughts? <br/>Join Our Chat Group!</h3>
                  <p>Do you have something that is troubling you and you want to share? Share your thoughts on our audio chat group.</p>
                       <button className='btn-outline'>JOIN OUR CHAT GROUP</button>
                       </div>
                </div>
                <div className="photo">
                    <img src='https://img.freepik.com/free-photo/group-multiethnic-creative-business-people-working-project-having-brainstorming-meeting-team-work-brainstorming-concept_58466-12409.jpg?size=626&ext=jpg' alt="join-prayer"/>
                </div>
            </div>
        </div>
    )
}

export default NeedPrayers
