import React, { useEffect } from 'react'

import './explore.styles.scss'

const Explore = () => {
    useEffect(() => {
        document.title = "Instagram"
    })

    return (
        <div className="explorePageComponent">
            <div className="explore">EXPLORE PAGE</div>
        </div>
    )
}

export default Explore
