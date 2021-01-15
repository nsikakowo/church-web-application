import React, {useState, useEffect } from 'react'
import NeedPrayers from './NeedPrayers'
import axios from 'axios';


    const homePrayerTabApi = 'https://church.aftjdigital.com/api/prayer-tab/home'
function HomePrayerTab(props) {

        const [prayerInfo, setPrayerInfo] = useState([]);

        const getPrayerInfo = async () => {
            const response = await axios.get(homePrayerTabApi);
            const getPrayerTabInfo = response.data.data;
            

            setPrayerInfo(getPrayerTabInfo);
        }

     useEffect(() => {
            getPrayerInfo();
     }, [])   

    return (
        <div>
            {prayerInfo.map((item) => {
                return <NeedPrayers key = {item.id} 
                tag = {item.tagtop} 
                 photo ={item.phototop} 
                 title = {item.titletop}
                 text ={item.texttop}
                tag2 = {item.tagbottom} 
                 photo2 ={item.photobottom} 
                 title2 = {item.titlebottom}
                 text2 ={item.textbottom}
                 btn1 ={'send us a message'}
                 btn2 = {'join our chat group'}
                 />
            })}
         
        </div>
    )
}

export default HomePrayerTab
