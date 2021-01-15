import React, {useState, useEffect } from 'react'
import FullWidthInfoBoard from './FullWithInfoBoard'
import axios from 'axios';


    const welcomeInfo = 'https://church.aftjdigital.com/api/home/fullwidth-board'
function WelcomeBoard() {

        const [info, setInfo] = useState([]);

        const getInfo = async () => {
            const response = await axios.get(welcomeInfo);
            const getFullInfo = response.data.data;
            

            setInfo(getFullInfo);
        }

     useEffect(() => {
            getInfo();
     }, [])   

    return (
        <div>
            {info.map((item, i) => {
                if(i === 0) {
                return ( <FullWidthInfoBoard key = {item.id} 
                
                 image ={item.image} 
                 title = {item.title}
                 description ={item.description}
                
                 />
                 ) }
            })}
         
        </div>
    )
}

export default WelcomeBoard
