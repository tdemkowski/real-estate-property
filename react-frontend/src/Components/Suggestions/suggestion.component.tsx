import React from 'react'

import './suggestion.styles.scss'
import { Link } from 'react-router-dom'
import User from './User/user.component'


const Suggestion = (props: any) => {
    const produceUserCard = (username: string, fullName: string, profilePictureUrl: string) => { // produce n cards (n=5 looks like the convention)
        return (
            <div className="userCard">
                <User username={username} fullName={fullName} profilePictureUrl={profilePictureUrl} />
                <button className="blueButton">Follow</button>
            </div>
        )
    }

    return (
        <div className="suggestionComponent">
            <h3 className="heading">Suggestions for you</h3>
            {props.fetchedUsers.map((obj: suggestType) => produceUserCard(obj.username, obj.fullName, obj.profilePictureUrl))}
        </div>
    )
}

export interface suggestType {
    username: string,
    fullName: string,
    profilePictureUrl: string
}

export default Suggestion
