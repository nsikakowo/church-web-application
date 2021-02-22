import React from 'react'
import './gallery.css'

const Gallery = (props) => {

    const {items, galleryTitle, } = props

      return (
          <div id= 'gallery'>
        <h3 className='galleryGroup-title'>{galleryTitle} </h3>
        <div className= 'gallery-container'>
            {items.map((item) => {
                const {id, image} = item;
                return (
                     <div className="gallery-images" key ={id}>
                <img src={image} alt="gallery"/>
            </div>
            )
            })}
            
        </div>
        </div>
    )
}

export default Gallery
