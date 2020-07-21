import React from 'react'

import './navbar.styles.scss'

const NavBar = () => {
    return (
        <div>
            <div className="nav">
                <a className="headerLogo">
                    <div className="headerLogo-Image">*logo*</div>
                    <div className="headerLogo-Header">
                        <h3 className="heading-logo">Instaclone</h3>
                    </div>
                </a>

                <div className="searchBox"></div>

                <div className="headerIcons">4x icons</div>
            </div>
            <div className="home-page"></div>
        </div>
    )
}

export default NavBar;