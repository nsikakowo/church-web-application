import React, {useState, useEffect } from 'react'
import NextEvent from '../../components/nextEvent/NextEvent'
import axios from "axios";
import '../../components/slider/slider.css';



const sliderUrl = "https://church.aftjdigital.com/api/sliders"

function HomeSlider(props) {
    
    const [sliderData, setSliderData] = useState([]);
    // const { image, sub_title, title} = props;

    const getSliderContents = async () => {
        const response = await axios.get(sliderUrl);
        const content =  response.data;
        setSliderData(content);
    
    }

    useEffect(() => {
        getSliderContents();
    }, [])

    
    // console.log("slider", sliderData)


   if(sliderData) {
    return (
        <main id='slider'>
            {sliderData.map((item, i) => {
                if(i === 0) {
                    return (
                        <div className="slide" key= {item.id}>
                        <div className="slide-image">
                            <img src={item.image} alt="slider-background"/>
                        </div>
                        <h1>{item.title} </h1>
                         <h5>...{item.sub_title}</h5>
            
                    </div>
                    )
                }
            })}
          
                    <div className="event-countdown">
                        <NextEvent/>
                    </div>
        </main>
    )
   }
}

    


export default HomeSlider
