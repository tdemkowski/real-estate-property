import React, { useEffect, useState } from 'react'

import Feed from '../../Components/Feed/feed.component'
import Stories from '../../Components/Stories/stories.component'
import axios from 'axios'
import './homepage.styles.scss'
import Suggestion from '../../Components/Suggestions/suggestion.component'
import UserComponent from '../../Components/Suggestions/User/user.component'
import InfiniteScroll from 'react-infinite-scroller'
import apiUrl from '../../config'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { UserState, IUser } from '../../redux/user/user.models'
import { LoadingOutlined } from '@ant-design/icons'

const NUMBER_OF_ITEMS_PER_PAGE = 3
interface Post {
    imageUrl: string
    id: string
    text: string
    user?: IUser
}

interface Props {
    user: UserState
}

const Homepage = (props: Props) => {
    const [posts, setPosts] = useState<Post[]>([])
    const [user, setUser] = useState<IUser>()
    const [hasMore, setHasMore] = useState(true)
    const [skip, setSkip] = useState(0)
    const [recommended, setRecommended] = useState<IUser[]>([])
    const path = useLocation()

    useEffect(() => {
        document.title = 'Instagram'
        console.log(props.user.currentUser)
        if (props.user.currentUser) {
            loadUserInfo()
            loadRecommended()
        }
    }, [1])

    const loadUserInfo = () => {
        axios
            .get(`${apiUrl}user/${props.user.currentUser?.userId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((res) => {
                setUser(res.data)
            })
    }

    const loadRecommended = () => {
        axios
            .get(`${apiUrl}user?take=3`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((res) => {
                setRecommended(res.data.response.items)
            })
    }

    const loadItems = () => {
        // make loading bar appear here before we start fetching requests
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
                    // make loading bar disappear here once we load all the shit ah
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

    return (
        <div className="HomePageComponent">
            <div className="HomePageMain">
                <div className="storySection">
                    <Stories />
                </div>
                
                <InfiniteScroll pageStart={0} loadMore={loadItems} hasMore={hasMore} loader={loader()}>
                    {posts.map((item, i) => (
                        <div key={i} className="feedSection">
                            <Feed
                                user={item.user}
                                image={item.imageUrl}
                                commentContent={item.text}
                                id={item.id}
                                path={path.pathname}
                            />
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
            {user ? (
                <div className="HomePageSide">
                    <UserComponent
                        username={user.username}
                        fullName={user.fullName}
                        profilePictureUrl={user.imageUrl}
                        mainUser="true"
                    />
                    <Suggestion fetchedUsers={recommended} />
                </div>
            ) : null}
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    user: state.user,
})

export default connect(mapStateToProps)(Homepage)
