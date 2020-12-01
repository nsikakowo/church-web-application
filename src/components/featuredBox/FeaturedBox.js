import React from 'react';
import './featuredBox.css'

function FeaturedBox() {
    return (
        <section className='featuredBox'>
            <article id='new-here'>
                <div className="overlay">
                <h4>Are You <br/>New Here?</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard
                     dummy text ever since the 1500s, when an unknown printer </p>
                     </div>
            </article>
            <article  id='beliefs'>
            <div className="overlay">
                <h4>Our Mission <br/> & Beliefs</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard
                     dummy text ever since the 1500s, when an unknown printer </p>
                     </div>
            </article>
            <article  id='ministries'>
            <div className="overlay">
                <h4>Our <br/>Ministries</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard
                     dummy text ever since the 1500s, when an unknown printer </p>
                     </div>
            </article>
            
        </section>
    )
}

export default FeaturedBox
