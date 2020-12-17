import React from 'react'
import './beliefs.css'

function Beliefs(props) {
    const {beliefPhoto,
        beliefBtn,
         beliefTitle, 
         beliefText,
          beliefPortion,
          beliefPhotoRight,
          beliefTitleRight, 
          beliefTextRight,
          beliefBtnRight,
           beliefPortionRight, showBeliefBtn = true, showBeliefBtnRight = true  } = props
    return (
        <>
        <div  className='beliefContainer'>
            <div className="beliefPhoto">
                <img src={beliefPhoto} alt={beliefTitle}/>
            </div>
            <div className="beliefContent" id= 'beliefLeft'>
                <h3>{beliefTitle}</h3>
                <p>{beliefText}</p>
               <p> {beliefPortion} </p>
    {showBeliefBtn && <button className="btn-outline">{beliefBtn}</button>}
            </div>
        </div>
        <div  className='beliefContainer'>
            
            <div className="beliefContent">
                <h3>{beliefTitleRight}</h3>
                <p>{beliefTextRight}</p>
               <p> {beliefPortionRight} </p>
               {showBeliefBtnRight && <button className="btn-outline">{beliefBtnRight}</button>}
            </div>
            <div className="beliefPhoto">
                <img src={beliefPhotoRight} alt={beliefTitleRight}/>
            </div>
        </div>
        </>
    )
}

export default Beliefs
