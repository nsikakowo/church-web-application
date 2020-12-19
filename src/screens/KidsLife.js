import React, {useState} from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import SubTitle from '../components/subTitle/SubTitle'
import ConnectGroup from '../components/connectGroups/ConnectGroup'
import MemberPlayer from '../components/newMemberPlayer/MemberPlayer'
import Gallery from '../components/gallery/Gallery'
import data from '../components/gallery/data'
import './givePage.css'
import Footer from '../components/footer/Footer'

//picture imports
import kids from './all-images/kids.jpg'
import banner from './all-images/kiddd.jpg'

function KidsLife() {
    const [items, setItems] = useState(data)
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'kidslife'}  image = {banner}
             tagline = {'Giving is a biblical principle that when lived by, produces a rich harvest in our lives'} />
            <SubTitle subheading = {'KidsLife is a place where kids experience that God is a Great big God and they can have a great big life! We love partnering with parents to help kids from birth to fifth grade grow in their walk with God and develop a lasting relationship with him. We invite you to check out all of the amazing opportunities we have to help kids live their best life now!'} />
            <div className="cart-buttons">
                    <button className='btn-primary'>what to expect</button>
                    <button className='btn-outline'>what happened?</button>
                </div>
                <MemberPlayer image = {kids} />
            <SubTitle subheading = {'Kids can now take KidsLife home by accessing the new KidsLife\'s YouTube channel, where they will find our new video series, The Quest. They will enjoy hilarious, relatable, heart-felt webisodes, all while hearing the message of Christ\'s love.'} />
            
            <ConnectGroup groupTitle= {'New to Our Church: What to Expect in KidsLife'} 
            groupText ={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
            groupBtn = {'JOIN A TEAM'} showConnectBtn = {false}
            groupPhoto = {banner} showOverlay = {false}
            />

            <SubTitle heading ={'EARLY CHILDHOOD (INFANTS-5YR)'} subheading = {'We offer a loving environment and explore the Bible through specific activities and worship'} />
            <Gallery items = {items} />
            <Footer/>

        </div>
    )
}

export default KidsLife
