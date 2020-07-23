import React from 'react'

import './feed.styles.scss'

const Feed = (props: any) => {
    return (
        <div className="feed-post">
            <div className="feed-header">
                <h4>{props.user}</h4>
                <div>
                    ...
                </div>
            </div>
            <div className="feed-image">
                <img src={props.image} alt="image not found" style={{ width: "100%" }}/>
            </div>
            <div className="feed-icons">
                <div className="feed-icons-left"></div>
                <div className="feed-icons-right"></div>
            </div>
            <div className="feed-Liked-by"></div>
            <div className="feed-Comments"></div>
            <form className="feed-Add-a-comment">
                <input type="text" placeholder="Add a comment..."/>
                <button className="SI-sign-up-link">Post</button>
            </form>
        </div>
    )
}

export default Feed
