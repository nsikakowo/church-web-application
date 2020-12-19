import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import ViewCartComponent from '../components/view-cart/ViewCartComponent'
import Footer from '../components/footer/Footer'



function ViewCart() {
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <div className="banner">
                <h3>Shopping Cart</h3>
                <p>Cart Subtotal (0 of item(s)): $0.00</p>
            </div>
            
           <ViewCartComponent />
           <hr/>
            <div className="checkout" style={{display:'flex',
        justifyContent:'center'}}>
           <button className='btn-outline' style={{margin:'5rem 0'}} 
           >Proceed to checkout</button>
            </div>
            <Footer/>

        </div>
    )
}

export default ViewCart
