import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import SubTitle from '../components/subTitle/SubTitle'
import NewMemberForm from '../components/newMemberForm/NewMemberForm'
import InfoBoard from '../components/infoBoard/InfoBoard'

import MessageSinglePlayer from '../components/MessageSinglePlayer/MessageSinglePlayer'
import Footer from '../components/footer/Footer'

function NewHere() {
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'welcome to church'} tagline = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '} />
            <SubTitle 
             
             subheading= {'We are very delighted that you are here. Our Team would love to serve you and help you get connected'}
            
            />
            <SubTitle 
             heading={'FILL THE FORM BELOW'}

            />
            <NewMemberForm />
            <InfoBoard title = {'We Are Easy To Find'} btn = {'click for directions'}
            description = {'Kidslife is a place where Kids experience that God is Great.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. '}
            
            />
            <MessageSinglePlayer />
            <Footer/>

        </div>
    )
}

export default NewHere
