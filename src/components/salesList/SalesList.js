import React from 'react'
import SalesComponent from '../salesComponent/SalesComponent'
import './salesList.css'
import cover from './cover.png'

function SalesList() {
    return (
        <div className='sales-List'>
            <SalesComponent productImage = {cover} productName={"Inspirational"} productAuthor ={"Allan Matson"} productPrice ={"$10.00"} />
            <SalesComponent productImage = {cover} productName={"John Doe"} productAuthor ={"Mary Pax"} productPrice ={"$31.00"} />
            <SalesComponent productImage = {cover} productName={"The Normad Chocktail"} productAuthor ={"Leo Stuggart"} productPrice ={"$10.00"} />
            
        </div>
    )
}

export default SalesList
