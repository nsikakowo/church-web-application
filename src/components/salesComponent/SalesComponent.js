import React from 'react'
import './sales.css'

function SalesComponent(props) {

    const {productImage, productName, productPrice, productAuthor} = props;

    return (
        <div className='sales-container'>
            <div className = "productBox">
            <div className="sales-image">
                <img src={productImage} alt=""/>
            </div>
            </div>
            <div className="sales-details">
                <h4>{productName} </h4>
                <p>{productAuthor}</p>
                <p>{productPrice}</p>
                <button className= 'btn-outline'>Add to Cart</button>
            </div>
        </div>
    )
}

export default SalesComponent
