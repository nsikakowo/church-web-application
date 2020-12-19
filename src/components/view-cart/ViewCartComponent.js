import React from 'react'
import './viewCart.css'

function ViewCartComponent() {
    return (
        <div>
            <div className="cart">
                <div className="item-container">
                <div className="item-photo">
                    <img src="" alt=""/>
                </div>
                <div className='item-details'>
                    <h3>The Normad Chocktail </h3>
                    <h4>By Leo Robistscher</h4>
                    <p>Hardcover</p>
                    
                    <p>BACKORDERED<br/>
Expected ship date: Tuesday, August 2nd</p>
                </div>
                </div>
                
                <div className='item-price-container'>
                    <p className="item-price">$10:00</p>
                </div>
                
                <div>
                    <div className="item-controls">
                        <p id='increase'>-</p>
                        <p>1</p>
                        <p id='decrease'>+</p>
                    </div>
                    <div className="item-remove">
                        <p>Remove</p>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default ViewCartComponent
