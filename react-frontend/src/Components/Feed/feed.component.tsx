import React, { useState } from 'react'
import threeDots from '../../Assets/threeDots.svg'
import heart from '../../Assets/heart.svg'
import speechBubble from '../../Assets/speech-bubble.svg'
import share from '../../Assets/share.svg'
import bookmark from '../../Assets/bookmark.svg'
import { Menu, Comment, Dropdown, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './feed.styles.scss'
import { useLocation } from 'react-router-dom'

import { Input } from 'antd';
const { TextArea } = Input;

enum FeedActions {
    post,
    copy,
    link,
    cancel,
}

enum PostActions {
    Unfollow,
    cancel,
}

const Feed = (props: any) => {
    const addComment = (content: String) => {} // requires user authentication
    const displayAsPost = props.displayAsPost

    const menu = (
        <Menu>
            <Menu.Item key={FeedActions.post}>
                <a href={'/p/' + props.id}>
                    Go to post
                </a>
            </Menu.Item>
            <Menu.Item key={FeedActions.copy} onClick={() => navigator.clipboard.writeText(props.path + 'p/' + props.id)}>
                Copy link
            </Menu.Item>
            <Menu.Item danger key={FeedActions.link}>
                Delete post
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key={FeedActions.cancel}>
                Cancel
            </Menu.Item>
        </Menu>
    )

    const menuPost = (
        <Menu>
            <Menu.Item danger key={PostActions.Unfollow}>
                Unfollow
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key={PostActions.cancel}>
                Cancel
            </Menu.Item>
        </Menu>
    )

    const headerSection = () => {
        return (
            <div className='header'>
                <h4>{props.user.username}</h4>
                <Dropdown overlay={displayAsPost ? menuPost : menu} trigger={['click']}>
                    <img src={threeDots} alt="" className="icon" style={{ height: '1rem' }} />
                </Dropdown>
            </div>
        )
    }

    const imageSection = () => {
        return (
            <div className="image">
                <img src={props.image} alt="" style={{ width: '100%' }} />
            </div>
        )
    }

    const socialSection = () => {
        return (
            <div className={displayAsPost ? "sideSection" : "socialSection"}>
                {displayAsPost ?  headerSection() : null}
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

                <div className="Comments">
                    <Comment className="comment" content={props.commentContent} avatar={props.image} author={props.user.username} />
                </div>

                <div className="line-separation"></div>
                
                <form className="Add-a-comment">
                    <TextArea placeholder="Add a comment..." autoSize />
                    <button className="comment-post">Post</button>
                </form>
            </div>
        )
    }

    return (
        <div className={displayAsPost? "postComponent" : "feedComponent"}>
            {displayAsPost ? imageSection() : headerSection()}

            {displayAsPost ? null : imageSection()}

            {socialSection()}
        </div>
    )
}

export default Feed
