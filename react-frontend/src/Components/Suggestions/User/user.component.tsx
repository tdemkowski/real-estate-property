import React from 'react'

import './user.styles.scss'
import { Link } from 'react-router-dom'

const UserComponent = (props: any) => {
    const mainUserStyle = {
        height: '4.5rem',
        width: '4.5rem',
    }

    return (
        <div className="user">
            <Link to={'/' + props.username} className="profilePicWrapper" style={props.mainUser ? mainUserStyle : {}}>
                <img className="profilePic" src={props.profilePictureUrl} alt="profilePictureUrl" />
            </Link>
            <div className="userDetails">
                <Link to={'/' + props.username} style={{ textDecoration: 'none' }} className="font fontThick">
                    {props.username}
                </Link>
                <p className="font grey">{props.fullName}</p>
            </div>
        </div>
    )
}

export default UserComponent
