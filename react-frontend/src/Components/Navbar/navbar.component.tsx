import React from 'react'

import './navbar.styles.scss'
import logo from './logo.svg'
import compass from './compass.svg'
import heart from './heart.svg'
import user from './user.svg'
import camera from './camera.svg'
import search from './search.svg'

const NavBar = () => {
    return (
        <div>
            <div className="nav">
                <div className="headerLogo">
                    <div className="headerLogo-Image">
                        <img src={logo}/>
                    </div>
                    <div className="headerLogo-Header">
                        <h3 className="heading-logo">Instagram</h3>
                    </div>
                </div>

                <div className="searchBox">
                    <img src={search}/>
                </div>

                <div className="headerIcons">
                    <img src={compass}/>
                    <img src={heart}/>
                    <img src={user}/>
                    <img src={camera}/>
                </div>
            </div>
        </div>
    )
}

export default NavBar
