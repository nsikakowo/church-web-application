import React from 'react'
import './newMember.css'




function NewMemberComponent(props) {

    const {sn, image, series, title, duration, speaker, venue  } = props;

    return (
        <div className='new-member-resource-container'>
            <article>
                <div className="larger-box">
                <div className="serial-number">{sn}.</div>
                <div className="resource-image-box">
                    <div className="resource-image">
                        <div className="box-overlay"> </div>
                            <img src={image} alt="resource"/>
                       
                    </div>

                    <div className="left">
                        <h5>{series}</h5>
                        <p> {title} </p>
                    </div>
                    <div className="right">
                        <p> {duration} </p>
                    </div>
                </div>
                </div>
                <div className="resource-details">
                    <h4> {series} : {title} </h4>
                    <p className='speaker'> {speaker} </p>
                    <p className ='venue'> {venue} </p>
                </div>
            </article>
        </div>
    )
}

export default NewMemberComponent
