import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import SubTitle from '../components/subTitle/SubTitle'
import VolunteerForm from '../components/volunteerForm/VolunteerForm'
import MessageSinglePlayer from '../components/MessageSinglePlayer/MessageSinglePlayer'
import Beliefs  from '../components/beliefs/Beliefs'
import Footer from '../components/footer/Footer'

import find from './all-images/find.jpg'
import question from './all-images/questions.jpg'

function Volunteer() {
    return (
        <div >
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'CHURCH WORKFORCE'} tagline = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '} />
            <SubTitle 
             
             subheading= {'Home cell is a vital part Jubilee Christian Church Int’l. This is because it is the best way you can connect to others with the passion in the church.\
             Each home cell group is a healthy community of people, expressing what they believe, exploiting their faith together and developing friendship.\
             Most of the home cell group meet at least once a month. If you want to plug into any of the life group, register below.  '}
            
            />
            <SubTitle 
             heading={'FILL THE FORM BELOW'}

            />
            <VolunteerForm />
            <MessageSinglePlayer />
            <Beliefs 
             beliefTitle ={'We Are Easy To Find'} beliefPhoto ={find} beliefPhotoRight ={question}
             beliefText = {'Kidslife is a place where Kids experience that God is Great.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. '}
            beliefBtn = {'click for directions'}
            beliefTitleRight ={'More Questions?'}
            beliefTextRight = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
            beliefBtnRight = {'CONTACT US NOW'}

            />
            <Footer/>
        </div>
    )
}

export default Volunteer
