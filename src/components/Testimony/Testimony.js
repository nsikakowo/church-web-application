import React from 'react'
import testifier1 from './testifier1.png'
import testifier2 from './testifier2.png'
import testifier3 from './testifier3.png'
import testifier4 from './testifier4.png'
import './testimony.css'

function Testimony() {
    return (
        <section className='testimony-container'>
            <div className="big-testifier">
                <img src={testifier1} alt="testifier"/>
            </div>
            <div className="content-area">
                <div className="text-area">
                    <h3 className="testimony-title">
                        The Miracle of Salvation</h3>
                        <h5 className="testifier-name-age">
                        Linda Adama,  23Years
                        </h5>
                        <p>Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been
                             the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and 
                             scrambled it to make a type specimen book.
                              It has survived not only five centuries, 
                              but also the leap into electronic typesetting,
                             remaining essentially unchanged.</p>
                             <button className='btn-noline'>Read full testimony</button>
                </div>
                <div className="small-testifier">
                    <div className="box">
                        <img src={testifier1} alt="testifier"/>
                    </div>
                    <div className="box">
                        <img src={testifier2} alt="testifier"/>
                    </div>
                    <div className="box">
                        <img src={testifier3} alt="testifier"/>
                    </div>
                    <div className="box">
                        <img src={testifier4} alt="testifier"/>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Testimony
