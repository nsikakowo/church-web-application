import React from 'react'
// import prayer from './praying.jpg'
// import chat from './chat-group.jpg'
import './needPrayes.css'

function NeedPrayers(props) {

    const {title, title2, text2, photo2, btn2, text, photo, btn1} = props;

    return (
        <div className='needPrayers'>
            <div className="prayers">
                <div className="photo">
                    <img src={photo} alt= {title} />
                </div>
                <div className="write-up">
                <div className="content">
                  <h3> {title}</h3>
                  <p> {text} </p>
                       <button className='btn-outline'> {btn1} </button>
                       </div>
                </div>
            </div>
            <div className="prayers" id = 'chat'>
               
                <div className="write-up">
                <div className="content">
                  <h3> {title2} </h3>
                  <p> {text2} </p>
                       <button className='btn-outline'> {btn2} </button>
                       </div>
                </div>
                <div className="photo">
                    <img src={photo2} alt={ title2} />
                </div>
            </div>
        </div>
    )
}

export default NeedPrayers
