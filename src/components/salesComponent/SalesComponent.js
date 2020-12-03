import React from 'react'
import './sales.css'

function SalesComponent() {
    return (
        <div className='sales-container'>
            <div className="sales-image">
                <img src="" alt=""/>
            </div>
            <div className="sales-details">
                <h4>The Normad Chocktail </h4>
                <p>Leo Robistscher</p>
                <p>$10.00</p>
                <button className= 'btn-outline'>Add to Cart</button>
            </div>
        </div>
    )
}

export default SalesComponent
