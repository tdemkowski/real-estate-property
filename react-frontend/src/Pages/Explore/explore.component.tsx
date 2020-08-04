import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './explore.styles.scss'
import apiUrl from '../../config'

const Explore = (props: any) => {
    const [arr, setArr] = useState<string[]>([])

    useEffect(() => {
        document.title = 'Instagram'
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

    // structure: 1 1 4, 111 111, 4 1 1, 111 111, ...
    // that is, 2 quarter sized images on left side, one normal size on right --> six quarter sized images --> 1 normal on left & 2 quarter sized on right --> etc
    // that is, 3 types of 'chunks' of images

    return  <div className="explorePageComponent">
        <div className="exploreImagesSection">
                <div className="exploreImages">
                    {
                        arr ? arr.map(url => {
                            return (
                                <figure key={url} className="exploreImageWrapper">
                                    <img className="exploreImage" src={url} alt="User Post"/>
                                </figure>
                            )
                        }) : null
                    }
                </div>
            </div>
        </div>
}

export default Explore
