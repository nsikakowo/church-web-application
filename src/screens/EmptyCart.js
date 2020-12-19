import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import Footer from '../components/footer/Footer'



function EmptyCart() {
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <div className="banner">
                <h3>Shopping Cart</h3>
                <p>Cart Subtotal (0 of item(s)): $0.00</p>
            </div>
            <p style = {{margin:"30vh", textAlign:'center'}}>There are no items in your shopping cart </p>
            
            <Footer/>

        </div>
    )
}

export default EmptyCart
