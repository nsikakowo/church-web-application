import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios';
import './pastorIntro.css'

const pastorIntroApi = 'https://church.aftjdigital.com/api/pastor_intro'

function PastorIntro() {

    const [introData, setIntroData] = useState([]);

    const getIntroData = async () => {
        const response = await axios.get(pastorIntroApi);
        const introBoxData = response.data.data;
        
        setIntroData(introBoxData);
    }
    useEffect(() => {
        getIntroData();
    }, [])


    return (
        <section className='intro-container'>
            
            {introData.map((item) => {
                return(
                    <div className="intro" key ={item.id}>
                <div className="content">
                    <h2>{item.title}</h2>
                        <p>{item.content}</p>
                            <NavLink to = './aboutpage' ><button type="submit" className='btn-primary'>More Info</button></NavLink>
                </div>
                <div className="image">
                    <div className="intro-pix">
                        <div className='bg'></div>
                    <img src={item.image} alt="pastorpicture"/>
                    </div>
                    <h5>{item.pastor_name}</h5>
                    <p>{item.pastor_position}</p>
                </div>  
            </div>
                ) 
                })}        
        </section>
    )
}

export default PastorIntro
