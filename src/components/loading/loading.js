import React from 'react'
import './loading.css'

function Loading() {
    return (
        <div className='loading-container'>
                <div className="loader">
                <div class="lds-ripple"><div></div><div></div></div>
                </div>
        </div> 
    )
}

export default Loading
