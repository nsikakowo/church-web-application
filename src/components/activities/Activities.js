import React from 'react'
import './activity.css'

function Activities() {
    return (
        <section className= 'activity-wrapper'>
            <h2>
                KidLife Care Week Nights
            </h2>
            <div className="activity-contents">
                <div className="activities">
                <article>
                    <h4>Monday</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ut eos! Reiciendis.</p>
                </article>
                <article>
                    <h4>Tuesday</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ut eos! Reiciendis.</p>
                </article>
                <article>
                    <h4>Friday</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ut eos! Reiciendis.</p>
                </article>
                <article>
                    <h4>Sunday</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ut eos! Reiciendis.</p>
                </article>
                </div>
            <div className="activity-banner">
                <img src="https://knowledgeworks.org/wp-content/uploads/2018/02/role-teacher-personalized-competency-based-classroom-social.jpg" alt="kids-activity"/>
            </div>
            </div>
        </section>
    )
}

export default Activities
