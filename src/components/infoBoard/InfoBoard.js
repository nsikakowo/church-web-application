import React from 'react'
import './infoBoard.css'

function InfoBoard(props) {

const {image, title, description, btn, children,
    showBtn = true
} = props

    return (
        <div className='infoboard'>
            <div className="info-image">
                <img src={image} alt=""/>
            </div>
            <div className="info-details">
                <h2> {title} </h2>
                <p> {description} </p>
                {children}
                     {showBtn && <button className='btn-outline'> {btn} </button>}
            </div>
        </div>
    )
}

export default InfoBoard
