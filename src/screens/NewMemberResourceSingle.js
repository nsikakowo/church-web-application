import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import MemberPlayer from '../components/newMemberPlayer/MemberPlayer'

import Footer from '../components/footer/Footer'
import './newmemberresource.css'
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import banner from './all-images/pastor.jpg'


function NewMemberResourceSingle() {
    return (
        <div >
             <NavBar/>
            <SecondaryMenu/>
            <MemberPlayer image = {banner} h5 = {'Session One'} p= {'A New Beginning'} icon = {<RiArrowLeftSLine/>} icon2= {<RiArrowRightSLine/>}/>
            <div className="member-res-form">
                <h2>Assessment</h2>
                <p>Please take this assessment 
                    test when you are done with this Season 
                    in other for you to move to the next Season.</p>
                <form className='res-form'>
                    <div className="member-form">
                    <h3>Question 1: How is man saved?</h3>
                    <label htmlFor="answer">
                        <input type="checkbox" name="answer" className='answer'/>
                        It is a long established fact that a reader
                         will be distracted by the readable content of 
                         a page when looking at its layout.
                    </label>
                    <label htmlFor="answer">
                        <input type="checkbox" name="answer" className='answer'/>
                        It is a long established fact that a reader
                         will be distracted by the readable content of 
                         a page when looking at its layout.
                    </label>
                    <label htmlFor="answer">
                        <input type="checkbox" name="answer" className='answer'/>
                        It is a long established fact that a reader
                         will be distracted by the readable content of 
                         a page when looking at its layout.
                    </label>
                    <label htmlFor="answer">
                        <input type="checkbox" name="answer" className='answer'/>
                        It is a long established fact that a reader
                         will be distracted by the readable content of 
                         a page when looking at its layout.
                    </label>
                    </div>
                    <div className="member-form">
                    <h3>Question 2: What is the hope of Salvation?</h3>
                    <label htmlFor="answer">
                        <input type="checkbox" name="answer" className='answer'/>
                        It is a long established fact that a reader
                         will be distracted by the readable content of 
                         a page when looking at its layout.
                    </label>
                    <label htmlFor="answer">
                        <input type="checkbox" name="answer" className='answer'/>
                        It is a long established fact that a reader
                         will be distracted by the readable content of 
                         a page when looking at its layout.
                    </label>
                    <label htmlFor="answer">
                        <input type="checkbox" name="answer" className='answer'/>
                        It is a long established fact that a reader
                         will be distracted by the readable content of 
                         a page when looking at its layout.
                    </label>
                    <label htmlFor="answer">
                        <input type="checkbox" name="answer" className='answer'/>
                        It is a long established fact that a reader
                         will be distracted by the readable content of 
                         a page when looking at its layout.
                    </label>
                    </div>
                    <div className="member-form">
                    <h3>Question 2:What makes a Man Righteous?</h3>
                    <label htmlFor="answer">
                        <input type="checkbox" name="answer" className='answer'/>
                        It is a long established fact that a reader
                         will be distracted by the readable content of 
                         a page when looking at its layout.
                    </label>
                    <label htmlFor="answer">
                        <input type="checkbox" name="answer" className='answer'/>
                        It is a long established fact that a reader
                         will be distracted by the readable content of 
                         a page when looking at its layout.
                    </label>
                    <label htmlFor="answer">
                        <input type="checkbox" name="answer" className='answer'/>
                        It is a long established fact that a reader
                         will be distracted by the readable content of 
                         a page when looking at its layout.
                    </label>
                    <label htmlFor="answer">
                        <input type="checkbox" name="answer" className='answer'/>
                        It is a long established fact that a reader
                         will be distracted by the readable content of 
                         a page when looking at its layout.
                    </label>
                    </div>
                    <button className='btn-outline' style= {{width:"250px"}}>submit</button>
                </form>
            </div>

            <Footer/>
        </div>
    )
}

export default NewMemberResourceSingle
