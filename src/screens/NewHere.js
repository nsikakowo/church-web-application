import React, {useEffect} from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import SubTitle from '../components/subTitle/SubTitle'
import Beliefs  from '../components/beliefs/Beliefs'
import NewMemberForm from '../components/newMemberForm/NewMemberForm'
import Accordian from '../components/accordian/Accordian'
// import InfoBoard from '../components/infoBoard/InfoBoard'

import MessageSinglePlayer from '../components/MessageSinglePlayer/MessageSinglePlayer'
import Footer from '../components/footer/Footer'

import banner from './all-images/welcome.jpg'
import find from './all-images/find.jpg'
import question from './all-images/questions.jpg'


function NewHere() {

    useEffect(() => {
        document.title = "New Here?";
        
      }, []);
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'welcome to church'} image = {banner}
            tagline = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '} />
            <SubTitle 
             
             subheading= {'We are very delighted that you are here. Our Team would love to serve you and help you get connected'}
            
            />
            <SubTitle 
             heading={'FILL THE FORM BELOW'}

            />
            <NewMemberForm />
            {/* <InfoBoard title = {'We Are Easy To Find'} btn = {'click for directions'}
            description = {'Kidslife is a place where Kids experience that God is Great.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. '}
            
            /> */}
            <Beliefs 
             beliefTitle ={'We Are Easy To Find'} beliefPhoto ={find} beliefPhotoRight ={question}
             beliefText = {'Kidslife is a place where Kids experience that God is Great.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. '}
            beliefBtn = {'click for directions'}
            beliefTitleRight ={'More Questions?'}
            beliefTextRight = {'Lorem Ipsum is  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
            beliefBtnRight = {'CONTACT US NOW'}

            />
            <MessageSinglePlayer />
            <Accordian/>
            <Footer/>

        </div>
    )
}

export default NewHere
