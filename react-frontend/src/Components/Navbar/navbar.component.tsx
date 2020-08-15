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
import { Menu, Dropdown, Button, message, Avatar } from 'antd';
import { SettingTwoTone, HeartTwoTone, UserOutlined } from '@ant-design/icons';



function handleMenuClick(e: any) {
    message.info('Click on menu item.');
    console.log('click', e);
    // if key = 1, go to profile
    // if key = 2, go to saved posts
    // if key = 3, go to profile settings
    // if key = 4, log out
  }

const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<HeartTwoTone twoToneColor="#eb2f96" />}>
        Saved
      </Menu.Item>
      <Menu.Item key="3" icon={<SettingTwoTone twoToneColor="#52c41a"/>}>
        Settings
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4">
        Log out
      </Menu.Item>
    </Menu>
  );



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

                    <Dropdown overlay={menu}>
                        <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png">
                        </Avatar>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default NavBar