import React from 'react'
import { Link } from 'react-router-dom'
import profileIcon from '../../../Assets/user.svg'
import savedIcon from '../../../Assets/saved.svg'
import settingsIcon from '../../../Assets/settings.svg'

import './user.styles.scss'

const ProfileDropdown = (props: any) => {
    const profile = props.profile
    const saved = props.profile + '/saved/'
    const settings = 'accounts/edit/'

    return (
        <div className="dropdownComponent">
            <Link to={profile}>
                <img className="icon" src={profileIcon} alt="" />
                <p>Profile</p>
            </Link>
            <Link to={saved}>
                <img className="icon" src={settings} alt="" />
                <p>Saved</p>
            </Link>
            <Link to={settings}>
                <img className="icon" src={settingsIcon} alt="" />
                <p>Settings</p>
            </Link>
            <hr />
            <Link to="OJQLEJQWEQe">
                <p>Log Out</p>
            </Link>
        </div>
    )
}

export default ProfileDropdown
