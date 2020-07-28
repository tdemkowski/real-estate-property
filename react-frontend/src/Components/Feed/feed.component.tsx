import React from 'react'
import threeDots from '../../Assets/threeDots.svg'
import heart from '../../Assets/heart.svg'
import speechBubble from '../../Assets/speech-bubble.svg'
import share from '../../Assets/share.svg'
import bookmark from '../../Assets/bookmark.svg'

import './feed.styles.scss'

const Feed = (props: any) => {
    return (
        <div className="feedComponent">
            <div className="header">
                <h4>{props.user}</h4>
                <img src={threeDots} alt="" className="icon" style={{ height: '1rem' }} />
            </div>

            <div className="image">
                <img src={props.image} alt="" style={{ width: '100%' }} />
            </div>

            <div className="icons">
                <div className="icons-left">
                    <img src={heart} alt="" className="icon heart" />
                    <img src={speechBubble} alt="" className="icon" />
                    <img src={share} alt="" className="icon" />
                </div>
                <div className="icons-right">
                    <img src={bookmark} alt="" className="icon" />
                </div>
            </div>

            <div className="Liked-by"></div>

            <div className="Comments">comments section here</div>
            <div className="line-separation"></div>
            <form className="Add-a-comment">
                <textarea className="comment-input" placeholder="Add a comment..." />
                <button className="comment-post">Post</button>
            </form>
        </div>
    )
}

export default Feed
