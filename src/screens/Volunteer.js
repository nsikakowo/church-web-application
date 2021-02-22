import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import SubTitle from '../components/subTitle/SubTitle'
import VolunteerForm from '../components/volunteerForm/VolunteerForm'
import MessageSinglePlayer from '../components/MessageSinglePlayer/MessageSinglePlayer'
import Beliefs  from '../components/beliefs/Beliefs'
import Footer from '../components/footer/Footer'

import pix from './all-images/workforce.jpg'

function Volunteer() {

    const [content, setContent] = useState([]);

    const getContent = async ()=> {
        const response = await axios.get('https://church.aftjdigital.com/api/volunteer-belief');
        setContent(response.data.data);
    }

    useEffect(() => {
        getContent();
    }, [])


    return (
        <div >
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'CHURCH WORKFORCE'} image={pix}  tagline = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '} />
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

            {content.map((item) => {
                return (
                    <Beliefs 
                     beliefTitle ={item.title_top} beliefPhoto ={item.image_top} beliefPhotoRight ={item.image_bottom}
                     beliefText = {item.text_top}
                    beliefBtn = {item.btn_text_top}
                    beliefTitleRight ={item.title_bottom}
                    beliefTextRight = {item.text_bottom}
                    beliefBtnRight = {item.btn_text_bottom}       
                    />
                )
            })}

            <Footer/>
        </div>
    )
}

export default Volunteer
