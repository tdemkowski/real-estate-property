import React, { useEffect } from 'react'

import './profile.styles.scss'
import { Link } from 'react-router-dom'
import settingsIcon from '../../Assets/settings.svg'

import profPic1 from '../HomePage/RemoveLater/profPic1.png'

const Profile = (props: any) => {
    useEffect(() => {
        document.title = 'insert username'
    })

    return <div className="profileComponent">
        <div className="profileHeader">

            <img className="profilePicture" src={profPic1} alt=""/>

            <div className="profileHeader-info">

                <div className="profileHeader-info-buttons">
                    <h1 className="font fontThin">username</h1>
                    <Link to="/settings/edit" className="buttonLink">
                        <button className="button font">Edit Profile</button>
                        <img className="icon" src={settingsIcon} alt=""/>
                    </Link>
                </div>

                <div className="profileHeader-info-stats">
                    <h3 className="profileHeader-stat">
                        <p className="font fontSmall">5 </p>
                        <p className="font fontThin fontSmall">posts</p>
                    </h3> 
                    <h3 className="profileHeader-stat">
                        <p className="font fontSmall">112 </p>
                        <p className="font fontThin fontSmall">followers</p>
                    </h3> 
                    <h3 className="profileHeader-stat">
                        <p className="font fontSmall">223 </p>
                        <p className="font fontThin fontSmall">following</p>
                    </h3> 
                </div>

                <div className="profileHeader-info-details">
                    <p className="font">Here is my bio blablabla yes no yes no asdlkj </p>
                    <Link to="https://cobratate.com/">https://cobratate.com/</Link>
                </div>

            </div>

        </div>
        
        <div className="profileCategories">
            profileCategories section
        </div>
        <div className="profileImages">
            image collection grid here
        </div>
    </div>
}

export default Profile
