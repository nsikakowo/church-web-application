import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import ReactPlayer from 'react-player'
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
                <NavLink to='/connect'><button className='btn-primary'>{item.btn_text}</button></NavLink>
            </div>
            <div className="video">
            <ReactPlayer className='video-source' url ={item.video} width= '300px' height ='250px' controls ={true} />
            </div>
        </article>
                )
            })}
            
        </div>
    )
}

export default MessageSinglePlayer
