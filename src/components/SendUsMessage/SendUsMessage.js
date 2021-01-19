import React, {useState} from 'react'
import MessageForm from './MessageForm'
import './sendUsMessage.css'
import googlemap from './map.jpg'

function SendUsMessage() {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    const handleReload= ()=> {
        window.location.reload();
    }

    return (
        <div className='main-message-container'>
            <div className="form">
                <h2>Send Us a Message</h2>

                    {!isSubmitted ?
                        <MessageForm submitForm ={submitForm}/> 
                        : <div style= {{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                            <p style = {{textAlign:'center', fontStyle:'italic', fontSize:'2rem', color:'red', paddingBottom:'3rem', paddingTop:'3rem'}}>
                                Message has been submitted
                            </p>
                            <button className= 'btn-primary' onClick={handleReload}>Submit Another Message</button>

                        </div>  }
                
            </div>
            <div className="google-map">
                <img src='' alt=""/> 
            </div>
        </div>
    )
}

export default SendUsMessage  
