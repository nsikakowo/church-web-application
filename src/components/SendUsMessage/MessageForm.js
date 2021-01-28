import React,{useState} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form'
import './sendUsMessage.css'




function MessageForm({submitForm}) {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        submitForm();
        console.log('formdata', data);

       axios.post('https://church.aftjdigital.com/api/sermon/contact_message', data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

   

    return (
       
                <form id='sendMessage' 
                 noValidate  
                 onSubmit = {handleSubmit(onSubmit)}>
                     <div>
                    <input type="text" name="name" 
                    placeholder='Your Name'
                    ref={register({ 
                        required: {value: true, message:"Name is required"},
                        minLength: {value:2, message:"Name must be 2+ characters"},
                        maxLength: {value:50, message:"Name must not exceed 50 characters"},
                        pattern: {value: /^[a-z ,.'-]+$/i, message: "Please exclude any special characters other than periods, apostrophes, dashes, or commas"},
                        validate: {
                            firstChar: value => /^[A-Za-z]/.test(value)
                        }, 
                    })} />
                    
                     {errors.name && <p id= 'error'>{errors.name.message}</p>}
                        {errors.name && errors.name.type === "firstChar" && <p id='error'>The first character must be a letter</p>}
                        </div>
                    <div>
                    <input type="text" name="email" 
                    placeholder='Your Email Address'
                    ref={register({ 
                        required: {value: true, message:"E-mail is actually required"},
                        pattern: {value: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i, 
                        message: "Please enter a valid e-mail address"},
                    })}/>
                    {errors.email && <p id= 'error' className='error-message'>{errors.email.message}</p>}
                    </div>

                    <textarea name="message"  cols="30" 
                    rows="20"
                    ref={register({ 
                        required: {value: true, message:"Message is required"},
                        minLength: {value:5, message:"Message must be 5+ characters"},
                        maxLength: {value:500, message:"Message must not exceed 500 characters"},
                    })}
                    ></textarea> <br></br>
                    {errors.message && <p id= 'error'>{errors.message.message}</p>}

                    <div id='checkbox'>
                    <label htmlFor="checkbox" id= 'checkLabel'>
                    <input type="checkbox" name="agreement" id='check' 
                     value='yes'
                     ref={register({ 
                        required: {value: true, message:"Please tick the acceptance box above "},
                    })}
                     />
                          I agree that my submitted data is 
                     been collected and stored.</label>
                     </div>
                     {errors.agreement && <p id= 'error'>{errors.agreement.message}</p>}

                     <button className= 'btn-primary' id='message-btn' type ='submit' >send message</button>
                </form>
       
    )
}

export default MessageForm
