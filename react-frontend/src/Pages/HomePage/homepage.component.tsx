import React, { useEffect } from 'react'

import Feed from '../../Components/Feed/feed.component'
import Stories from '../../Components/Stories/stories.component'

import './homepage.styles.scss'

import sampleImage_1 from './RemoveLater/carbonDating.png'
import sampleImage_2 from './RemoveLater/chungus.jpg'

const Homepage = () => {
    useEffect(() => {
        document.title = 'Instagram'
    })

    return (
        <div className="HomePageComponent">
            <div className="storySection">
                <Stories />
            </div>
            <div className="feedSection">
                <Feed user="Person1" image={sampleImage_1} />
            </div>
            <div className="feedSection">
                <Feed user="Person2" image={sampleImage_2} />
            </div>
        </div>
    )
}

export default Homepage
