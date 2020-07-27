import React, { useEffect, Component, useState } from 'react'

import Feed from '../../Components/Feed/feed.component'
import Stories from '../../Components/Stories/stories.component'
import axios from 'axios'
import './homepage.styles.scss'

import sampleImage_1 from './RemoveLater/carbonDating.png'
import sampleImage_2 from './RemoveLater/chungus.jpg'

interface Post {
    imageUrl: string;
    id: string;
}
const Homepage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [user, setUser] = useState<{username: string}>()
    useEffect(() => {
        document.title = "Instagram"
        axios.get('http://localhost:3002/api/user/3376a019-c2ef-4539-bbfe-0ef35d4c045d' ).then(res =>{
            console.log(res)
            setPosts(res.data.posts);
            const { username } = res.data;
            setUser({username })
            //setPosts(res.);
        })
    }, [1])

    return (
        <div className="HomePageComponent">
            <div className="storySection">
                <Stories />
            </div>
            {
           posts.length && user ? posts.map((item, i) => (
                <div  key={i} className="feedSection">
                    <Feed user={user.username} image={item.imageUrl}/>
                </div>
            )) : null
            }
            <div className="feedSection">
                <Feed user="Person1" image={sampleImage_1}/>
            </div>
            <div className="feedSection">
                <Feed user="Person2" image={sampleImage_2}/>
            </div>
        </div>
    )
}

export default Homepage
