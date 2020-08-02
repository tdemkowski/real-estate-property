import React, { useEffect, useState } from 'react'

import './profile.styles.scss'
import { Link } from 'react-router-dom'
import settingsIcon from '../../Assets/settings.svg'
import axios from 'axios'
import apiUrl from '../../config'

import profPic1 from '../HomePage/RemoveLater/profPic1.png'

const Profile = (props: any) => {
    const [arr, setArr] = useState<string[]>([])

    useEffect(() => {
        document.title = 'insert username'
    })

    if(arr.length === 0) {
        axios.get(`${apiUrl}user/9e849201-78ff-4945-940b-74396b234fa7`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        } )
        .then(res =>{
            let tmp: string[] = []
            for (let i=0; i < 12; i++) {
                tmp.push(res.data.posts[i].imageUrl)
            }
            if(arr !== tmp) {
                setArr(tmp)
            }
        })
        .catch(error => console.log(error))
    }
    console.log(arr)



    return (
        <div className="profileComponent">
        <div className="profileHeader">

            <img className="profilePicture" src={profPic1} alt=""/>

            <div className="profileHeader-info">

                <div className="profileHeader-info-buttons">
                    <h1 className="font fontThin">username</h1>
                    <Link to="/settings/edit" className="buttonLink">
                        <button className="button font">Edit Profile</button>
                        <img className="icon" src={settingsIcon} alt=""/>
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
                    <p className="font">Here is my bio blablabla yes no yes no asdlkj </p>
                    <Link to="https://cobratate.com/" className="fontThick darkBlue">cobratate.com</Link>
                </div>

            </div>

        </div>
        
        <div className="profileCategories">
            <div className="category">Posts</div>
            <div className="category">Tagged</div>
        </div>
        <div className="profileImagesSection">
            <div className="profileImages">
                {
                    arr ? arr.map(url => {
                        return (
                            <div key={Math.random()} className="previewedImageWrapper">
                            <img className="previewedImage" src={url} alt="User Post"/>
                        </div>
                        )
                    }) : null
                }
            </div>
        </div>
    </div>
    )
}

export default Profile
