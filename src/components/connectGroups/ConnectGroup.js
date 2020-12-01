import React from 'react'
import './connectGroup.css'

function ConnectGroup(props) {
    const {groupPhoto, groupTitle, groupText, groupBtn} = props
    return (
        <div  className='groupContainer'>
            <div className="groupPhoto">
                <img src={groupPhoto} alt={groupTitle}/>
            </div>
            <div className="groupContent">
                <h3>{groupTitle}</h3>
                <p>{groupText}</p>
                <button className = 'btn-primary'>{groupBtn}</button>
            </div>
        </div>
    )
}

export default ConnectGroup
