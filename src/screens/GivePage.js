import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import Donation from '../components/Donation/Donation'
import './givePage.css'
import Footer from '../components/footer/Footer'

//picture imports
import banner from './all-images/give1.jpg'

const apiUrl = 'https://church.aftjdigital.com/api/church-donations';

function GivePage() {

    const [details, setDetails] = useState([]);
    const [giving, setGiving] = useState([]);

    const getApiDetails = async () => {
       const response = await axios.get(apiUrl);
       const newDetails = response.data.data;
    
        setDetails(newDetails['donation-content']);
        setGiving(newDetails['giving-content']);

    }

    useEffect(() => {
        getApiDetails();
    }, [])

    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'Give'}  image = {banner}
             tagline = {'Giving is a biblical principle that when lived by, produces a rich harvest in our lives'} />

            <Donation title ={details.title} text = {details.text} />  
            
            <div className="giving-details">
                <div className="giving-image">
                    <img src={giving.image} alt={giving.title}/>
                </div>
                <div className="giving-content">
                    <h2> {giving.title} </h2>
                    <p>{giving.text} </p>
                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default GivePage
