import React, { useEffect, useState } from 'react'
import './profile.styles.scss'
import { Link } from 'react-router-dom'
import settingsIcon from '../../Assets/settings.svg'
import axios from 'axios'
import apiUrl from '../../config'
import profPic1 from '../HomePage/RemoveLater/profPic1.png'
import { connect } from 'react-redux'
import { deleteCurrentUser } from '../../redux/user/user.action'
import { IUser, UserState } from '../../redux/user/user.models'
import InfiniteScroll from 'react-infinite-scroller'
import Feed from '../../Components/Feed/feed.component'
import { LoadingOutlined } from '@ant-design/icons'

const NUMBER_OF_ITEMS_PER_PAGE = 9

interface Post {
    imageUrl: string
    id: string
    text: string
    user?: IUser
}

interface tempUser {
    age: Number
    createdAt: String
    email: String
    fullName: String
    id: String
    profilePictureURL: String
    updatedAt: String
    username: String
}

const Profile = (props: any) => {
    const [posts, setPosts] = useState<Post[]>([])
    const [skip, setSkip] = useState(0)
    const [postsLoaded, setPostsLoaded] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const [arr, setArr] = useState<string[]>([])
    const [userData, setUserData] = useState<tempUser>()

    useEffect(() => {
        document.title = props.username

        axios
            .get(`${apiUrl}user/${props.username}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((user) => {
                setUserData(user.data)
                console.log(user.data)
            })
            .catch((err) => console.log(err))
    })

    const loadItems = () => {
        setTimeout(() => {
            axios
                .get(`${apiUrl}p?take=3&skip=${skip}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })
                .then((res) => {
                    setPosts([...posts, ...res.data.response.items])
                    setSkip(skip + NUMBER_OF_ITEMS_PER_PAGE)
                    setPostsLoaded(postsLoaded + 3)
                    setHasMore(false)
                    if (postsLoaded >= res.data.total) setHasMore(false)
                })
        }, 1000)
    }

    const loader = () => {
        return (
            <div className="loader">
                <LoadingOutlined style={{ fontSize: '3rem', color: '#dbdbdb' }} />
            </div>
        )
    }

    const loadHeader = () => {
        return (
            <div className="profileHeader">
                <img className="profilePicture" src={profPic1} alt="" />

                <div className="profileHeader-info">
                    <div className="profileHeader-info-buttons">
                        <h1 className="font fontThin">{userData?.username}</h1>
                        <Link to="/settings/edit" className="buttonLink">
                            <button className="button font">Edit Profile</button>
                            <img className="icon" src={settingsIcon} alt="" />
                        </Link>
                    </div>

                    <div className="profileHeader-info-stats">
                        <h3 className="profileHeader-stat">
                            <p className="font fontSmall">5 </p>
                            <p className="font fontThin fontSmall">posts</p>
                        </h3>
                        <h3 className="profileHeader-stat">
                            <p className="font fontSmall">112 </p>
                            <p className="font fontThin fontSmall">followers</p>
                        </h3>
                        <h3 className="profileHeader-stat">
                            <p className="font fontSmall">223 </p>
                            <p className="font fontThin fontSmall">following</p>
                        </h3>
                    </div>

                    <div className="profileHeader-info-details">
                        <p className="font fontThick">Title here or something</p>
                        <p className="font">Here is my bio blablabla yes no yes no asdkj </p>
                        <Link to="https://cobratate.com/" className="fontThick darkBlue">
                            s f cobratate.com
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="profileComponent">
            {userData ? loadHeader() : null}
            <div className="profileCategories">
                <div className="category font">POSTS</div>
                <div className="category font">TAGGED</div>
            </div>
            <div className="profileImagesSection">
                <div className="profileImages">
                    {/* <InfiniteScroll pageStart={0} loadMore={loadItems} hasMore={hasMore} loader={loader()}>
                        {posts.map((item, i) => (
                            <div key={i} className="feedSection">
                                <Feed
                                    user={item.user}
                                    image={item.imageUrl}
                                    commentContent={item.text}
                                    id={item.id}
                                />
                            </div>
                        ))}
                    </InfiniteScroll> */}
                </div>
            </div>
        </div>
    )
}

export default Profile
