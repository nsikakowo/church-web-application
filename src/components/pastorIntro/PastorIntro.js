import React from 'react'
import pastorPicture from './simpsons.png';
import './pastorIntro.css'

function PastorIntro() {
    return (
        <section className='intro-container'>
            <div className="intro">
                <div className="content">
                    <h2>We are a Church that believes
                        in Jesus & loves God and People</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.</p>
                            <button type="submit" className='btn-outline'>More Info</button>
                </div>
                <div className="image">
                    <img src={pastorPicture} alt="pastorpicture"/>
                    <h5>David & Tamara Simpsons</h5>
                    <p>Senior Pastor AFTJ Church</p>
                </div>
            </div>
        </section>
    )
}

export default PastorIntro
