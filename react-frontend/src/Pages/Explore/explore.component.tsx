import React, { useEffect } from 'react'

import './explore.styles.scss'

const Explore = (props: any) => {
    useEffect(() => {
        document.title = "Instagram"
    })

    // structure: 1 1 4, 111 111, 4 1 1, 111 111, ... 
    // that is, 2 quarter sized images on left side, one normal size on right --> six quarter sized images --> 1 normal on left & 2 quarter sized on right --> etc
    // that is, 3 types of 'chunks' of images


    return (
        <div className="explorePageComponent">
            insert image chunk stuff here
        </div>
    )
}

export default Explore