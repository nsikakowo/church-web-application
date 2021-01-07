import React from 'react'
import './loading.css'

function loading() {
    return (
        <div className='loading-container'>
                <div className="loader">
                <div class="lds-ripple"><div></div><div></div></div>
                </div>
        </div>
    )
}

export default loading
