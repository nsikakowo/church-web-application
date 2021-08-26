import React, {useState, useEffect } from 'react'
import NextEvent from '../../components/nextEvent/NextEvent'
import Loading from '../../components/loading/Loading'
import axios from "axios";
import '../../components/slider/slider.css';
import intro from "./iintromp4.mp4"
import NavBar from "../../components/Header/NavBar"
import SecondaryMenu from "../../components/secondaryMenu/SecondayMenu"



const sliderUrl = "https://church.aftjdigital.com/api/sliders"

function HomeSlider() {
    
    const [sliderData, setSliderData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
   

    const getSliderContents = async () => {
        const response = await axios.get(sliderUrl);
        const content =  response.data;
        setSliderData(content.data);
        setIsLoading(true);
    }

    useEffect(() => {
        getSliderContents();
    }, [])

   if(sliderData) {
    return (
        <section>
            {isLoading ?
        <main id='slider'>
            
            {sliderData.map((item, i) => {
                if(i === 0) {
                    return (
                        
                            <div className="slide" key= {item.id}>
                                <div className="home_nav_test">
                                    <NavBar/>
                                    <SecondaryMenu/>
                                </div>
                                <video className="slide-image" autoPlay loop muted>
                                    <source src={intro} type='video/mp4'/>
                                </video>
                                <div className="slide-image-main" >
                                    <img src={item.image} alt={item.title}/>
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
        </main> : <Loading/> }
        </section>
    )
   }
}

    


export default HomeSlider

/* <YoutubeBackground
                    videoId={'oofSWPuDXmU'}                /* default -> null */
                    // aspectRatio={"16:9"}            /* default -> "16:9" */
                    // overlay={"rgba(0,0,0,.4)"}              /* default -> null */
                    // nocookie={false} 
                    // start={'1:52'} 
                    // end={'2:10'}               /* default -> false | sets host to https:/*www.youtube-nocookie.com to avoid loading Google's cookies */
                    
                    
                    // > */}
            /* {sliderData.map((item, i) => {
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
                    </YoutubeBackground>: <Loading/> } */
