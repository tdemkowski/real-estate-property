import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../config'
import { Redirect } from 'react-router-dom'
import { Menu, Dropdown } from 'antd'
import Feed from '../../Components/Feed/feed.component'
import './post.styles.scss'

const Post = (props: any) => {
    const [loadedPost, setLoadedPost] = useState(false)
    const [post, setPost] = useState<any>([])

    useEffect(() => {
        document.title = 'Instagram'
        
        axios
        .get(`${apiUrl}p/${props.postId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then((res) => {
            setPost(res.data)
            setLoadedPost(true)
        })
        .catch(err => console.warn(err))
    }, [1])

    return (
        <div className="PostPageComponent">
            {loadedPost ? <div className="post">
            <Feed user={post.user.username} image={post.imageUrl} commentContent={post.text} id={post.id} displayAsPost={true} />
            </div> : 
            <div>
                <p>Post id '{props.postId}' not found</p>
            </div>}
        </div>
    )
}

export default Post
