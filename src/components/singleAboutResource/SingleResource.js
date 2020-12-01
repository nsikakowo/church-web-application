import React from 'react'
import './singleResource.css'

function SingleResource() {
    return (
        <section className= 'resource-container'>
            <div className="resource-banner">
                <img src="" alt=""/>
            </div>
            <div className="resource-content">
                <h2>Learn More</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Rerum similique minima quas cum ea ab earum voluptatum saepe corporis, 
                    quod odio doloribus iusto dicta eaque fuga dolorem
                     consequatur beatae nostrum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Rerum similique minima quas cum ea ab earum voluptatum saepe corporis, 
                    quod odio doloribus iusto dicta eaque fuga dolorem
                     consequatur beatae nostrum.</p>
                    <button className= 'btn-primary'>More resources</button>
                    <button className='btn-outline'>Downloads</button>
            </div>
        </section>
    )
}

export default SingleResource
