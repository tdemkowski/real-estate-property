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

interface Post {
    imageUrl: string
    id: string
    text: string
}

const Homepage = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [user, setUser] = useState<{ username: string }>()
    const [hasMore, setHasMore] = useState(true)
    const path = useLocation()

    const propTypes = {
        articles: PropTypes.object.isRequired,
        pagination: PropTypes.object.isRequired
    }

    useEffect(() => {
        document.title = 'Instagram'
        axios
        .get(`${apiUrl}p`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then((res) => {
            console.log(res)
            setPosts(res.data.response.items)
            const username = "insert username here"
            setUser({ username })
            //setPosts(res.);
        })
    }, [1])

    const loadItems = (numberOfItems: any) => {

    }

    // remove later:
    const sampleSuggestionObject = {
        username: 'bob',
        fullName: 'Bob Smith',
        profilePictureUrl:
            'https://vignette.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg/revision/latest/top-crop/width/360/height/450?cb=20121110131754',
        id: 1,
    }
    const sampleSuggestionObject2 = {
        username: 'Jackasd',
        fullName: 'J Dog',
        profilePictureUrl:
            'https://cdn.vox-cdn.com/thumbor/GO2m3Vd_o2Rlzt8uWhqSTNUDU_o=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16295964/Mordhau.jpg',
        id: 2,
    }
    const sampleArray = [sampleSuggestionObject, sampleSuggestionObject2]

    const signedInUser = {
        username: 'YOU',
        fullName: 'Your Self',
        profilePictureUrl:
            'https://i.guim.co.uk/img/media/788dbbce44c1846fab9da460f64d23d02754a143/362_0_776_1626/master/776.jpg?width=700&quality=85&auto=format&fit=max&s=1e9a8ef81695378d74053e1767f3fc8d',
        id: 3,
    }
    //<Comment content={props.commentContent} avatar={props.image} author={props.user} />

    let items: any[] = []
    posts.map((item, i) => 
        items.push(
            <div key={i} className="feedSection">
                <Feed id={item.id} user={"username here"} image={item.imageUrl} commentContent={item.text} />
            </div>
        )
    )

    return (
        <div className="HomePageComponent">
            <div className="HomePageMain">
                <div className="storySection">
                    <Stories />
                </div>
                {posts.length && user
                    ? posts.map((item, i) => (
                          <div key={i} className="feedSection">
                              <Feed user={user.username} image={item.imageUrl} commentContent={item.text} id={item.id} path={path.pathname} />
                          </div>
                      ))
                    : null}
                {/* <InfiniteScroll
                    pageStart={0}
                    loadMore={true}
                    hasMore={true || false}
                    loader={<div className="loader">Loading ...</div>}>
                {items}
                </InfiniteScroll> */}
            </div>
            <div className="HomePageSide">
                <User
                    username={signedInUser.username}
                    fullName={signedInUser.fullName}
                    profilePictureUrl={signedInUser.profilePictureUrl}
                    mainUser="true"
                />
                <Suggestion fetchedUsers={sampleArray} />
            </div>
        </div>
    )
}

export default Homepage
