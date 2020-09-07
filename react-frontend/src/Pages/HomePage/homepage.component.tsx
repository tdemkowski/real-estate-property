import React, { useEffect, useState } from 'react'

import Feed from '../../Components/Feed/feed.component'
import Stories from '../../Components/Stories/stories.component'
import axios from 'axios'
import './homepage.styles.scss'
import Suggestion from '../../Components/Suggestions/suggestion.component'
import User from '../../Components/Suggestions/User/user.component'
import InfiniteScroll from 'react-infinite-scroller'
import PropTypes from 'prop-types'

import apiUrl from '../../config'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from '../../redux/user/user.action'

const NUMBER_OF_ITEMS_PER_PAGE = 3
interface Post {
    imageUrl: string
    id: string
    text: string
}

interface User {
    username: string
    fullName: string
    imageUrl: string
}

const Homepage = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [user, setUser] = useState<{ username: string }>()
    const [hasMore, setHasMore] = useState(true)
    const [skip, setSkip] = useState(0)
    const path = useLocation()
    const [recommended, setRecommended] = useState<User[]>([])

    const propTypes = {
        articles: PropTypes.object.isRequired,
        pagination: PropTypes.object.isRequired,
    }

    useEffect(() => {
        document.title = 'Instagram'

        axios
            .get(`${apiUrl}user?take=3`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((res) => {
                console.log(res.data.response.items)
                setRecommended(res.data.response.items)
            })
    }, [1])

    const loadItems = (numberOfItems: any) => {
        // make loading bar appear here before we start fetching requests
        axios
            .get(`${apiUrl}p?take=3&skip=${skip}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((res) => {
                setPosts([...posts, ...res.data.response.items])
                const username = 'insert username here'
                setUser({ username })
                setSkip(skip + NUMBER_OF_ITEMS_PER_PAGE)
                // make loading bar disappear here once we load all the shit ah
            })
    }

    //<Comment content={props.commentContent} avatar={props.image} author={props.user} />

    let items: any[] = []

    return (
        <div className="HomePageComponent">
            <div className="HomePageMain">
                <div className="storySection">
                    <Stories />
                </div>
                {posts.length && user
                    ? posts.map((item, i) => (
                          <div key={i} className="feedSection">
                              <Feed
                                  user={'user'}
                                  image={item.imageUrl}
                                  commentContent={item.text}
                                  id={item.id}
                                  path={path.pathname}
                              />
                          </div>
                      ))
                    : null}
                <InfiniteScroll
                    pageStart={0}
                    loadMore={loadItems}
                    hasMore={true || false}
                    loader={<div className="loader">Loading ...</div>}
                >
                    {items}
                </InfiniteScroll>
            </div>
            <div className="HomePageSide">
                    <User username={'ur'} fullName={'data'} profilePictureUrl={'here'} mainUser="true" />
                    <Suggestion fetchedUsers={recommended} />
            </div>
        </div>
    )
}

export default Homepage