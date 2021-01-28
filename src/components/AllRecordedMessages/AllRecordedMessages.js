import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './allRecorded.css';
import {  FaSearch } from 'react-icons/fa';

const videoApi = 'https://church.aftjdigital.com/api/sermon/recoded_message'

function AllRecordedMessages() {

    const [message, setMessage] = useState([]);

    const getDetailsApi = async () => {
        const response = await axios.get(videoApi);
        setMessage(response.data.data);
        
    }

    useEffect(() => {
        getDetailsApi();
    }, []);
    
    return (
        <section className='all-messages-container'>
            <h2>ALL RECORDED MESSAGES</h2>
            <form className="message-search">
            <button>
                    <FaSearch />
                </button>
            <input type="text" name="email" 
                placeholder='Search All Messages'/>
                
            </form>
            <div className="message-container">
            {message.map((item) => {
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
        </section>
    )
}

export default AllRecordedMessages
