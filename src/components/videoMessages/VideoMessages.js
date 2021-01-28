import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './videoMessages.css';

const recentMessageApi = 'https://church.aftjdigital.com/api/sermon/message_latest';


function VideoMessages() {

    const [details, setDetails] = useState([]);

    const getDetails = async () => {
        const response = await axios.get(recentMessageApi);
        setDetails(response.data.data);
    }

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <section className='video-messages-container'>
            <h2>RECENT MESSAGES</h2>
            <div className="message-container">

            {details.map((item) => {
                return (
                    <article key ={item.id}>
                    <div className="video-frame">
                        <video src={item.video}  controls={true}></video>
                    </div>
                    <h4>{item.message_title}</h4>
                    <h5>{item.preachers_name} - {item.month}</h5>
                    <p>{item.details}</p>
                </article>
                    
                )
            })}
                
               
            </div>
                <button className='btn-primary'>View more podcast</button>
        </section>
    )
}

export default VideoMessages
