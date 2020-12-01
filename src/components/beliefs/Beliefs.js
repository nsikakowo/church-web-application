import React from 'react'
import './beliefs.css'

function Beliefs(props) {
    const {beliefPhoto,
         beliefTitle, 
         beliefText,
          beliefPortion,
          beliefPhotoRight,
          beliefTitleRight, 
          beliefTextRight,
           beliefPortionRight } = props
    return (
        <>
        <div  className='beliefContainer'>
            <div className="beliefPhoto">
                <img src={beliefPhoto} alt={beliefTitle}/>
            </div>
            <div className="beliefContent">
                <h3>{beliefTitle}</h3>
                <p>{beliefText}</p>
               <p> {beliefPortion} </p>
            </div>
        </div>
        <div  className='beliefContainer'>
            
            <div className="beliefContent">
                <h3>{beliefTitleRight}</h3>
                <p>{beliefTextRight}</p>
               <p> {beliefPortionRight} </p>
            </div>
            <div className="beliefPhoto">
                <img src={beliefPhotoRight} alt={beliefTitleRight}/>
            </div>
        </div>
        </>
    )
}

export default Beliefs
