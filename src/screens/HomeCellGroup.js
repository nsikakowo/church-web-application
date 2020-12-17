import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import SubTitle from '../components/subTitle/SubTitle'
import HomeCellForm from '../components/homeCellForm/HomeCellForm'
import MessageSinglePlayer from '../components/MessageSinglePlayer/MessageSinglePlayer'
import Beliefs  from '../components/beliefs/Beliefs'
import Footer from '../components/footer/Footer'

import banner from './all-images/homecell.jpg'
import find from './all-images/find.jpg'
import questions from './all-images/questions.jpg'


function HomeCellGroup() {
    return (
        <div >
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'HOME CELL GROUP'} image ={banner}
            tagline = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  '} />
            <SubTitle 
             
             subheading= {'Home cell is a vital part Jubilee Christian Church Int’l. This is because it is the best way you can connect to others with the passion in the church.\
             Each home cell group is a healthy community of people, expressing what they believe, exploiting their faith together and developing friendship.\
             Most of the home cell group meet at least once a month. If you want to plug into any of the life group, register below.  '}
            
            />
            <SubTitle 
             heading={'FILL THE FORM BELOW'}

            />
            <HomeCellForm />
            <MessageSinglePlayer />
            <Beliefs 
            beliefPhoto ={find}
            beliefPhotoRight ={questions}
             beliefTitle ={'We Are Easy To Find'}
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

export default HomeCellGroup
