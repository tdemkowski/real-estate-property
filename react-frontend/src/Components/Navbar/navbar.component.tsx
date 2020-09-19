import React, { useState, useRef, useEffect } from 'react'

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
import { Menu, Dropdown, message, Avatar } from 'antd'
import { SettingTwoTone, HeartTwoTone, UserOutlined } from '@ant-design/icons'
import { deleteCurrentUser } from '../../redux/user/user.action'
import { connect } from 'react-redux'
import BaseAction from '../../redux/base-action.model'
import UserActionTypes from '../../redux/user/user.types'
import { Button } from 'antd'
import { UserState } from '../../redux/user/user.models'

enum MenuActions {
    goToProfile,
    goToSaved,
    goToSettings,
    logOut,
}

interface Props {
    deleteCurrentUser: () => BaseAction<UserActionTypes, null>
    user: UserState
}

const NavBar = (props: Props) => {
    const [searching, setSearching] = useState(false)
    const [viewActivity, setViewActivity] = useState(false)
    const [profileDropdown, setProfileDropdown] = useState(false)

    const path = useLocation().pathname
    const noTextDecoration = { textDecoration: 'none' }

    const searchTrigger = () => {
        setSearching(true)
        setTimeout(() => {
            setSearching(false)
        }, 2000)
    }

    const heartClicked = () => {
        setViewActivity(!viewActivity)
    }

    const dropdown = () => {
        setProfileDropdown(!profileDropdown)
    }

    const handleMenuClick = (e: any) => {
        if (+e.key === MenuActions.logOut) {
            message.error('LOGOUT')
            localStorage.setItem('token', '');
            props.deleteCurrentUser()
        }
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key={MenuActions.goToProfile} icon={<UserOutlined />}>
                Profile
            </Menu.Item>
            <Menu.Item key={MenuActions.goToSaved} icon={<HeartTwoTone twoToneColor="#eb2f96" />}>
                Saved
            </Menu.Item>
            <Menu.Item key={MenuActions.goToSettings} icon={<SettingTwoTone twoToneColor="#52c41a" />}>
                Settings
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key={MenuActions.logOut}>Log out</Menu.Item>
        </Menu>
    )

    return (
        <div className="navigationComponent">
            <div className="nav">
                <div className="headerLogo">
                    <Link to="/" style={noTextDecoration}>
                        <h3 className="heading-logo">Instagram</h3>
                    </Link>
                </div>

                <div className="searchBox">
                    <img alt="search icon" src={search} className="searchBox-icon" />
                    <input className="searchBox-input" type="text" placeholder="Search" onChange={searchTrigger} />
                    {searching ? (
                        <img className="searchBox-spinner" alt="search spinner" src={spinner} />
                    ) : (
                        <div className="searchBox-spinner"></div>
                    )}
                </div>

                {props.user.currentUser ? (
                    <div className="headerIcons">
                        <Link to="/explore">
                            <img
                                alt="compass.png"
                                src={path === '/explore' ? compassFilled : compass}
                                className="icon"
                            />
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
                                src={
                                    path === '/sign-in' || path === '/sign-up' || path === '/userTemp'
                                        ? userFilled
                                        : user
                                }
                                className="icon"
                            />
                        </div>

                        <img alt="camera.png" src={camera} className="icon" />

                        <Dropdown overlay={menu} trigger={['click']}>
                            <Avatar
                                size="large"
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            ></Avatar>
                        </Dropdown>
                    </div>
                ) : (
                    <div className="div">
                        <Link to="/sign-in">
                            <Button type="primary">Log in</Button>
                        </Link>
                        <Link to="/sign-up">
                            <Button>Sign up</Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    user: state.user,
})

const mapDispatchToProps = (dispatch: any) => ({ deleteCurrentUser: () => dispatch(deleteCurrentUser()) })

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
