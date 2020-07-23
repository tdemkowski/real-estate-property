import React from 'react'
import Feed from './Feed/feed.component'
import './homepage.styles.scss'

import sampleImage_1 from './RemoveLater/carbonDating.png'
import sampleImage_2 from './RemoveLater/chungus.jpg'

const Homepage = () => {
    return (
        <div>
            <div className="home-page">
                <Feed user="Person1" image={sampleImage_1}/>
            </div>
            <div className="home-page">
                <Feed user="Person2" image={sampleImage_2}/>
            </div>
        </div>
    )
}

export default Homepage
