import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './messageSinglePlayer.css';
// import poster from './poster.png'

const messageApi = 'https://church.aftjdigital.com/api/get-involved'

function MessageSinglePlayer() {

    const [message, setMessage] = useState([]);

    const getMessage = async () => {
        const response = await axios.get(messageApi);
        setMessage(response.data.data)
    }

    useEffect(() => {
        getMessage();
    }, [])

    return (
            <div>
            {message.map((item) => {
                return (
                 <article className='single-messagePlayer' key = {item.id}>
                    <div className="content">
                <p>{item.title}</p>
                <h2>{item.topic}</h2>
                <button className='btn-primary'>{item.btn_text}</button>
            </div>
            <div className="video">
            <video  src= {item.video} controls={true} ></video>
            </div>
        </article>
                )
            })}
            
        </div>
    )
}

export default MessageSinglePlayer
