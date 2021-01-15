import React, {useState} from 'react'
import SignUp from './SignUp'
import './callToAction.css'

function CallToAction() {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function onSubmit() {
        setIsSubmitted(true);
    }


    return (
        <div className='cta'>
            <div className='cta-overlay'></div>
            <h2>STAY CONNECTED</h2>

            <p>Subscribe to our 
                weekly newsletter to stay up to 
                date with every happenings</p>
                
                {!isSubmitted ?
                <SignUp onSubmit = {onSubmit}/>
                : <h3>Thank You for subscribing to our mailing list</h3>
                }       
        </div>
    )
}

export default CallToAction
