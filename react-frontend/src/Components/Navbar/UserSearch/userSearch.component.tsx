import React from 'react'

import User from './User/user.component'

import './user.styles.scss'

interface userType { 
    profilePictureURL: string, 
    username: string, 
    fullName: string
}

const UserSearch = (props: any) => { // suppose this receives an array 'userFetch' with all the users
    const displayUsers = () => {
        // displays the users in props.userFetch array
        props.userFetch.map((user: userType) => <User profilePictureURL={user.profilePictureURL} username={user.username} fullName={user.fullName}  />)
    }

    return (
        <div className="userSearchComponent">
            {props.userFetch ? displayUsers : <h2>No results found.</h2>}
        </div>
    )
}

export default UserSearch