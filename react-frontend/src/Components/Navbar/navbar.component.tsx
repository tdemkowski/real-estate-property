import React from 'react'

import './navbar.styles.scss'

import compass from '../../Assets/compass.svg'
import heart from '../../Assets/heart.svg'
import user from '../../Assets/user.svg'
import camera from '../../Assets/camera.svg'
import search from '../../Assets/search.svg'
import spinner from '../../Assets/spinner.svg'

const NavBar = (props: any) => {
    return (
        <div>
            <div className="nav">
                <div className="headerLogo">
                    <div className="headerLogo-Header">
                        <h3 className="heading-logo">Instagram</h3>
                    </div>
                </div>

                <div className="searchBox">
                    <img alt="search.png" src={search} className="searchBox-icon"/>
                    <input 
                        className="searchBox-input" 
                        type="text" 
                        placeholder="Search"
                        onChange={props.search}
                    />
                    {props.searching ? <img alt="search.png" src={spinner} className="searchBox-spinner"/> : <div className="searchBox-spinner"></div>}
                </div>

                <div className="headerIcons">
                    <img alt="compass.png" src={compass} className="icon"/>
                    <img alt="heart.png" src={heart} className="icon"/>
                    <img alt="user.png" src={user} className="icon"/> 
                    <img alt="camera.png" src={camera} className="icon"/>
                </div>
            </div>
        </div>
    )
}

export default NavBar