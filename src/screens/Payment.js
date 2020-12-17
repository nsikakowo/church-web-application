import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'

import Footer from '../components/footer/Footer'
import './payment.css'

import { FcCheckmark } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";


function Payment() {
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <div className="banner">
                <h3>Make Payment</h3>
            </div>
            <div className="payment-form">
                <form>
                    <label htmlFor="amount"> Amount:<br/>
                        <input type="text" name="amount" />
                    </label>
                    <label htmlFor="cardHolder"> Card Holder:<br/>
                        <input type="text" name="cardHolder" />
                    </label>
                    <label htmlFor="cardNumber"> Card Number:<br/>
                        <input type="text" name="cardNumber" placeholder='---- ---- ---- ----' />
                    </label>
                    <div>
                    <label htmlFor="expiry-date"> Expiry Date:<br/>
                        <input type="text" name="expiry-date" placeholder='Month/Year' />
                    </label>
                    <label htmlFor="cvv"> CVV:<br/>
                        <input type="text" name="cvv" placeholder='---'/>
                    </label>
                    </div>
                    <button className='btn-primary'>continue</button>
                </form>
            </div>
            <div className="payment-success">
                <div className="info-box">
                    <div className="tick">
                     <FcCheckmark />
                    </div>
                    <p>Payment Successful</p>

                    <button className='btn-primary'>Home</button>
                </div>
            </div>
            <div className="payment-fail">
                <div className="info-box">
                    <div className="payment-close">
                     <AiOutlineClose />
                    </div>
                    <div className="tick">
                     <AiOutlineClose />
                    </div>
                    <p>Payment Unsuccessful</p>

                    <button className='btn-primary'>Try Again</button>
                </div>
            </div>
            
            <Footer/>

        </div>
    )
}

export default Payment
