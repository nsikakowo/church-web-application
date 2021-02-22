import React from 'react'
import './storeBanner.css'


function StoreBanner(props) {
    const {title, description, btn, image, btn_txt} = props
    return (
        <div className='store-banner'>
            <h3 className='banner-title'>{title}</h3>
            <p> {description} </p>
                <a href = {btn_txt} >  <button className='btn-primary'>{btn}</button></a>
                <img src={image} alt="bookshelf"/>
                <div className='overlay'></div>
        </div>
    )
}

export default StoreBanner
