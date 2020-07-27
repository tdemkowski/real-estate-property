import React, { useEffect } from 'react'

import Feed from '../../Components/Feed/feed.component'
import Stories from '../../Components/Stories/stories.component'

import './homepage.styles.scss'

const Profile = () => {
    useEffect(() => {
        document.title = 'insert username'
    })

    return <div className="profileComponent">Profile page here</div>
}

export default Profile
