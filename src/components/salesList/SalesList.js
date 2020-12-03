import React from 'react'
import SalesComponent from '../salesComponent/SalesComponent'
import './salesList.css'

function SalesList() {
    return (
        <div className='sales-List'>
            <SalesComponent />
            <SalesComponent />
            <SalesComponent />
        </div>
    )
}

export default SalesList
