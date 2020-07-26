import React from 'react'

import './story.styles.scss'

const Story = (props: any) => {
    return (
        <div className="story">
            <img className="profilePicture" src={props.profilePicture} alt=""/>
        </div>
    )
}

export default Story
