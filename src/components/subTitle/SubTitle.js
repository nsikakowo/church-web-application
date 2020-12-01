import React from 'react'
import './subtitle.css'

function SubTitle(props) {
    const {heading, subheading, littleHead} = props;
    return (
        <div class='subtitle'>
            <h2> {heading} </h2>
            <p> {subheading} </p>
            <h4> {littleHead}  </h4>
        </div>
    )
}

export default SubTitle
