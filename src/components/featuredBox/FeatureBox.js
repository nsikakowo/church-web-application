import React, {useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import './featuredBox.css'
import axios from 'axios';

const featuredBoxUrl = 'https://church.aftjdigital.com/api/featured_box'


function FeatureBox(props) {

    const [boxData, setBoxData] = useState([]);

    const getBoxData = async () => {
        const response = await axios.get(featuredBoxUrl);
        const featuredBoxData = response.data.featured_box;
        
        setBoxData(featuredBoxData);
    }
    useEffect(() => {
        getBoxData();
    }, [])
    
 
    return(
       <NavLink to='/newhere'>
        <section className='featuredBox'>  

        {boxData.map((item) => {
            return(
                <article key={item.id}>
                <div className="overlay"></div>
                <div className="box-image">
                  <img src={item.image} alt="bg"/>
              </div>
              <h4>{item.title}</h4>
              <p>{item.details}</p>
             
              
            </article>
            )
            })}
        
     
    
  </section></NavLink>
     
    )
}



export default FeatureBox
