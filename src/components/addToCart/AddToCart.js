import React from 'react'
import './addTocart.css'

function AddToCart() {
    return (
        <div className='addContainer'>
            <div className="add-component-container">
                <h2>view cart</h2>
                <hr/>
            <div className="addcart">
                <div className="additem-container">
                <div className="additem-photo">
                    <img src="" alt=""/>
                </div>
                <div className='additem-details'>
                    <h3>The Normad Chocktail </h3>
                    <h4>By Leo Robistscher</h4>
                    <p>Hardcover</p>
                    
                    <p>BACKORDERED<br/>
Expected ship date: Tuesday, August 2nd</p>
                </div>
                </div>
                
                <div className='additem-price-container'>
                    <p className="additem-price">$10:00</p>
                </div>
                
                <div>
                    <div className="additem-controls">
                        <p id='addincrease'>-</p>
                        <p>1</p>
                        <p id='adddecrease'>+</p>
                    </div>
                    <div className="additem-remove">
                        <p>Remove</p>
                    </div>
                </div>
                </div>
                <hr/>
                <div className="cart-buttons">
                    <button className='btn-primary'>continue shopping</button>
                    <button className='btn-outline'>view cart</button>
                </div>
                </div>
        </div>
    )
}

export default AddToCart
