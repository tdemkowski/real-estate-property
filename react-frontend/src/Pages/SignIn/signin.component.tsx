import React, { useEffect, useState } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'

import './signin.styles.scss'
import Axios from 'axios'
import apiUrl from '../../config'
import { setCurrentUser } from '../../redux/user/user.action'
import { IUser } from '../../redux/user/user.models'
import { connect } from 'react-redux'
import BaseAction from '../../redux/base-action.model'
import UserActionTypes from '../../redux/user/user.types'

interface Props {
    setCurrentUser(user: IUser): BaseAction<UserActionTypes, IUser>
}
const SignIn = (props: Props) => {
    const [userOrEmail, setUserOrEmail] = useState('')
    const [password, setPassword] = useState('')
    const [borderSuccessStyle, setBorderSuccessStyle] = useState({ borderColor: '#dbdbdb' })
    const [redirect, setRedirect] = useState(false)
    const [failedMessage, setFailedMessage] = useState('')

    useEffect(() => {
        document.title = 'Sign in'
    })

    const logoStyle = {
        fontSize: '2.5rem',
        cursor: 'default',
        marginTop: '0px',
    }

    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to="/" />
        }
    }

    const failed = () => {
        if (failedMessage) {
            return (
                <p style={{ color: '#b80000' }} className="font">
                    {failedMessage}
                </p>
            )
        } else {
            return null
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (userOrEmail && password) {
            let body

            if (userOrEmail.includes('@')) {
                body = {
                    email: userOrEmail,
                    password,
                }
            } else {
                body = {
                    username: userOrEmail,
                    password,
                }
            }

            Axios.post(`${apiUrl}auth/signin`, body)
                .then((res) => {
                    console.warn(res)
                    const { email, userId, exp, username, fullName } = JSON.parse(atob(res.data.token.split('.')[1]))
                    window.localStorage.setItem('token', res.data.token)
                    props.setCurrentUser({ email, userId, exp, username, fullName })
                    setBorderSuccessStyle({ borderColor: '#dbdbdb' })
                    setRedirect(true)
                })
                .catch((err) => {
                    setFailedMessage('Failed to log in.')
                    setBorderSuccessStyle({ borderColor: 'red' })
                })
        } else {
            setFailedMessage('Fill up all fields.')
            setBorderSuccessStyle({ borderColor: 'red' })
        }
    }
    return (
        <div className="signInComponent">
            <div className="sign-in-wrapper">
                <div className="sign-in">
                    <h1 className="heading-logo" style={logoStyle}>
                        Instagram
                    </h1>
                    {renderRedirect()}
                    <form onSubmit={(event) => handleSubmit(event)} className="sign-in-form">
                        <input
                            autoComplete="username"
                            type="text"
                            name="username"
                            placeholder="Username or email"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setUserOrEmail(event.target.value)
                            }
                            className="input-field"
                            style={borderSuccessStyle}
                        />
                        <input
                            autoComplete="current-password"
                            autoCapitalize="off"
                            autoCorrect="off"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                            className="input-field"
                            style={borderSuccessStyle}
                        />
                        {failed()}
                        <button type="submit" className="blueButton">
                            Log In
                        </button>
                    </form>
                </div>

                <div className="sign-up">
                    <p className="sign-up-question">Don't have an account?</p>
                    <Link to="/sign-up" style={{ textDecoration: 'none' }}>
                        <p className="sign-up-link">Sign up</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    user: state.user,
})

const mapDispatchToProps = (dispatch: any) => ({ setCurrentUser: (user: IUser) => dispatch(setCurrentUser(user)) })

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
