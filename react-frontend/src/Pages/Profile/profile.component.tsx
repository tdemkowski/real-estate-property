import React, { useEffect } from 'react'

import './profile.styles.scss'
import { Link } from 'react-router-dom'

const Profile = (props: any) => {
    useEffect(() => {
        document.title = 'insert username'
    })

    return <div className="profileComponent">
        <div className="profileHeader">

            <img src={props.profileImageURL} alt=""/>

            <div className="profileHeader-info">

                <div className="profileHeader-info-buttons">
                    <h1>{props.username}</h1>
                    <Link to="/settings/edit">
                        <button >Edit Profile</button>
                    </Link>
                </div>

                <div className="profileHeader-info-stats">
                    <h3 className="profileHeader-posts">{props.posts}</h3> 
                   <h3 className="profileHeader-followers">{props.followers}</h3> 
                   <h3 className="profileHeader-following">{props.following}</h3> 
                </div>

                <div className="profileHeader-info-details">
                    <h3 className="heading">{props.fullName}</h3>
                    <p>{props.bio}</p>
                    <Link to={props.website}>{props.website}</Link>
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
