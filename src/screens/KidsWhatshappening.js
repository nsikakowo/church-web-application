import React, {useState} from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import SubTitle from '../components/subTitle/SubTitle'
import MemberPlayer from '../components/newMemberPlayer/MemberPlayer'
import KidsTeam from '../components/kidsTeam/KidsTeam'
import {NavLink} from 'react-router-dom'
import Activity from '../components/activities/Activities'
import './givePage.css'
import Footer from '../components/footer/Footer'
import {Data} from './kidsdata.js'
import {KidsClasses} from './Kidsclasses.js'
import {FiPlus, FiMinus} from 'react-icons/fi'


//picture imports
import girl from './all-images/young.jpg'
import banner from './all-images/kidzone.jfif'

function KidsWhatshappening() {

    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if(clicked === index) {
            return setClicked(null)
        } 
        setClicked(index)
    }
    return (
        <div>
            <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'kidslife'}  image = {banner}
             tagline = {'Giving is a biblical principle that when lived by, produces a rich harvest in our lives'} />
            <SubTitle subheading = {'KidsLife is a place where kids experience that God is a Great big God and they can have a great big life! We love partnering with parents to help kids from birth to fifth grade grow in their walk with God and develop a lasting relationship with him. We invite you to check out all of the amazing opportunities we have to help kids live their best life now!'} />
            <div className="cart-buttons">
                    <NavLink to= '/kidslife'><button className='btn-outline'>what to expect</button></NavLink>
                    <NavLink to= '/kidswhatshappening'><button className='btn-primary'>what happening?</button> </NavLink>
                
                </div>
                <MemberPlayer />
            <Activity />
            <section className='faq-wrapper'>
            <h2>KidLife Opportunities</h2>
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
        <KidsTeam/>
        <section className='faq-wrapper'>
            <h2>Classes Before & After Services</h2>
            {KidsClasses.map((item, index) => {
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
        
            <Footer/>

        </div>
        </div>
    )
}

export default KidsWhatshappening
