import React from 'react';
import {feature} from './data'
import './featuredBox.css'

function FeaturedBox() {
    return (
        

            <section className='featuredBox'>
          {feature.map((featured) => {
            const { id, title, text, image } = featured;
            return (
              <article key={id}>
                  <div className="overlay"></div>
                  <div className="box-image">
                    <img src={image} alt="bg"/>
                </div>
                <h4>{title}</h4>
                <p>{text}</p>
                
              </article>
            );
          })}
        </section>
            
       
    )
}

export default FeaturedBox
