import React, {useState} from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import SubTitle from '../components/subTitle/SubTitle'
import Gallery from '../components/gallery/Gallery'
import data from '../components/gallery/data'
import Footer from '../components/footer/Footer'

import mission from './all-images/mission.jpg'

function Missions() {
    const [items, setItems] = useState(data)
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'CHURCH MISSIONS'}  image ={mission}
            tagline = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  '} />
            <SubTitle  heading={'About Our Church Missions'}
             
               subheading = {'How beautiful on the mountains are the feet of those who bring good news,\
               who proclaim peace, who bring good tidings, who proclaim salvation, who say to Zion,\
                Your God Reigns!  Isaiah 52:7. '}>
                    <p>Our Church Missions is reaching around the world with the message of
                Hope and Compassion of Jesus Christ by forming, training and sending evangelistic,
                humanitarian and medical missions teams to assist people in need.
                 We make it easy for you to have a global impact.</p>
                </SubTitle>
               
               
            
            <Gallery items = {items} galleryTitle = {'Evangelism'}/>
            <Gallery items = {items} galleryTitle = {'Humanitarian'}/>
            <Gallery items = {items} galleryTitle = {'Medical Missions'}/>
            <Footer/>
        </div>
    )
}

export default Missions
