import React from 'react'
import './moreResource.css'

import Pastor from '../../screens/all-images/simpsons.jpg'

function MoreResource() {
    return (
        <div className ='more-wrapper'>
            <aside className='resource-image'>
                <img src={Pastor} alt="Our Pastor"/>
            </aside>
            <article>
                <h2>More Resources</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Tenetur voluptatem minima quis totam accusamus, iusto
                     commodi dolores. Earum accusantium quas neque blanditiis deserunt,
                      at consequuntur omnis qui! Rem id deleniti provident suscipit corporis, iste quia 
                    unde natus dolorem excepturi placeat omnis, blanditiis culpa eligendi 
                    praesentium voluptas? Distinctio vel ipsa quaerat?
                </p>
                <div className="btn-links">
                    <button className='btn-outline'>classes</button>
                    <button className='btn-outline'>articles</button>

                </div>

            </article>
        </div>
    )
}

export default MoreResource
