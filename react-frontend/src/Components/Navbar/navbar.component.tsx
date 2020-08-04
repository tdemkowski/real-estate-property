import React, { useState, useRef } from 'react'

import './navbar.styles.scss'

import compass from '../../Assets/compass.svg'
import compassFilled from '../../Assets/compassFilled.svg'
import heart from '../../Assets/heart.svg'
import heartFilled from '../../Assets/heartFilled.svg'
import user from '../../Assets/user.svg'
import userFilled from '../../Assets/userFilled.svg'
import camera from '../../Assets/camera.svg'
import search from '../../Assets/search.svg'
import spinner from '../../Assets/spinner.svg'
import { Link, useLocation } from 'react-router-dom'
import { profile } from 'console'

const NavBar = (props: any) => {
    const [searching, setSearching] = useState(false)
    const [viewActivity, setViewActivity] = useState(false)
    const [profileDropdown, setProfileDropdown] = useState(false)
    const [show, setShow] = useState(false)
    const target = useRef(null)

    const path = useLocation().pathname
    const noTextDecoration = { textDecoration: 'none' }

    const searchTrigger = () => {
        setSearching(true)
        setTimeout(()=>{setSearching(false)}, 2000)
    }

    const heartClicked = () => {
        setViewActivity(!viewActivity)
    }

    const dropdown = () => {
        setProfileDropdown(!profileDropdown)
    }

    return (
        <div className="navigationComponent">
            <div className="nav">
                <div className="headerLogo">
                    <div className="headerLogo-Header">
                        <Link to="/" style={noTextDecoration}>
                            <h3 className="heading-logo">Instagram</h3>
                        </Link>
                    </div>
                </div>

                <div className="searchBox">
                    <img alt="search icon" src={search} className="searchBox-icon" />
                    <input className="searchBox-input" type="text" placeholder="Search" onChange={searchTrigger} />
                    {searching ? (
                        <img className="searchBox-spinner" alt="search spinner" src={spinner}  />
                    ) : (
                        <div className="searchBox-spinner"></div>
                    )}
                    
                </div>

                <div className="headerIcons">
                    <Link to="/explore">
                        <img alt="compass.png" src={path === '/explore' ? compassFilled : compass} className="icon" />
                    </Link>
                    <img
                        alt="heart.png"
                        src={viewActivity ? heartFilled : heart}
                        className="icon"
                        onClick={heartClicked}
                    />
                    <div onClick={dropdown}>
                        <img
                            alt="user.png"
                            src={path === '/sign-in' || path === '/sign-up' || path === '/userTemp' ? userFilled : user}
                            className="icon"
                        />
                    </div>

                    <img alt="camera.png" src={camera} className="icon" />
                </div>
            </div>
        </div>
    )
}

export default NavBar