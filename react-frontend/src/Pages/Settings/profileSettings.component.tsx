import React, { useEffect } from 'react'

import './profileSettings.styles.scss'

const ProfileSettings = (props: any) => {


    useEffect(() => {
        document.title = props.username

    })

    return (
        <div>PROFILE SETTINGS PAGE HERE</div>
    )
}

export default ProfileSettings
