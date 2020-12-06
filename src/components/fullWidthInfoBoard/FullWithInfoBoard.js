import React from 'react'
import './fullWidth.css'


function FullWidthInfoBoard(props) {
    const {title, description, image} = props
    return (
        <div className='fullInfo-banner'>
            <h3 className='banner-title'>{title}</h3>
            <p> {description} </p>
                
                <img src={image} alt="background"/>
                <div className='overlay'></div>
        </div>
    )
}

export default FullWidthInfoBoard
