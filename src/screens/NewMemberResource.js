import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import NewMemberComponent from '../components/newmemberresource/NewMemberComponent'

import Footer from '../components/footer/Footer'

import banner from './all-images/pastor.jpg'


function NewMemberResource() {
    return (
        <div >
             <NavBar/>
            <SecondaryMenu/>
            <h2 style={{margin: '3rem 5rem 0rem'}}>New Beginning Classes</h2>
            <NewMemberComponent 
            sn = {'1'}  image = {banner} series = {"Session One"} title = {'A New Beginning'}
            duration = {'18:22'} venue ={'Our Church'}  speaker = {'Pastor Davids Simpsons'}
            />
            <NewMemberComponent 
            sn = {'2'}  image = {banner} series = {"Session Two"} title = {'Queit Time'}
            duration = {'18:22'} venue ={'Our Church'}  speaker = {'Pastor Tamara Simpsons'}
            />
            <NewMemberComponent 
            sn = {'3'}  image = {banner} series = {"Session Three"} title = {'Godly Relationship'}
            duration = {'18:22'} venue ={'Our Church'}  speaker = {'Pastor Davids Simpsons'}
            />
            <NewMemberComponent 
            sn = {'4'}  image = {banner} series = {"Session Four"} title = {'The best is yet to come'}
            duration = {'18:22'} venue ={'Our Church'}  speaker = {'Pastor Tamara Simpsons'}
            />
            
            <Footer/>
        </div>
    )
}

export default NewMemberResource

