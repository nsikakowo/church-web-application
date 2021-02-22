import React, {useState} from 'react'
import {FiPlus, FiMinus} from 'react-icons/fi'
import {Data} from './data.js'
import './accordian.css'

function Accordian() {

    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if(clicked === index) {
            return setClicked(null)
        } 
        setClicked(index)
    }

    return (
        <section className='faq-wrapper'>
            <h2>Frequently Asked Questions</h2>
            {Data.map((item, index) => {
                return (
                    <article>
                    <div className="question" onClick ={() => toggle(index)} key = {index}>
                    <h3>{item.question}</h3>
                    <span>{clicked === index ? <FiMinus/> : <FiPlus/>} </span>
                        </div>  
                        <div>
                            {clicked === index ? 
                            <p> {item.answer} </p> : null
                              }
                        </div>
                    </article>
                )
            })}
        </section>
    )
}

export default Accordian
