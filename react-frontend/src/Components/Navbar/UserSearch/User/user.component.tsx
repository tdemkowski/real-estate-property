import React from 'react'

import './user.styles.scss'

const User = (props: any) => {
    return (
        <div className="userComponent">
            <img className="profilePic" src={props.profilePictureURL} alt=""/>
            <h2 className="username">{props.username}</h2>
            <h2 className="fullName">{props.fullName}</h2>
        </div>
    )
}

export default User