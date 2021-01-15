import React from 'react'
import {useForm} from 'react-hook-form'
import './callToAction.css'

function SignUp({onSubmit}) {

    const {register, handleSubmit, errors} = useForm();
    const onSubmit2 = data => {
        onSubmit();
        console.log(data);
    }

    return (
        <div>
            
                <form className="subscribe" 
                noValidate 
                 onSubmit = {handleSubmit(onSubmit2)}>
                    <input type="email" name="email" 
                    ref = {register({
                        required:{ value: true, message:"No e-mail was entered" },
                        pattern : {value:/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
                        message: "Please enter a valid e-mail address"},
                    })}
                    placeholder='Enter your Email'/>
                    <button type='submit'>subscribe</button>
                </form>
                    {errors.email && <p id= 'error'>{errors.email.message}</p>}
        </div>
    )
}

export default SignUp
