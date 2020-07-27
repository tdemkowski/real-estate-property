import React from 'react'

import Story from './Story/story.component'
import '../Stories/stories.styles.scss'

import profPic1 from '../../Pages/HomePage/RemoveLater/profPic1.png' // remove later
import profPic2 from '../../Pages/HomePage/RemoveLater/profPic2.png' // remove later

const Stories = (props: any) => {
    return (
        <div className="homePage">
            <div className="storyComponent">
                <Story profilePicture={profPic1} />
                <Story profilePicture={profPic2}/>
            </div>
        </div>
    )
}

export default Stories