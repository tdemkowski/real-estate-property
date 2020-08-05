import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

import './signup.styles.scss'
import Axios from 'axios'
import apiUrl from '../../config'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [borderSuccessStyle, setBorderSuccessStyle] = useState({borderColor: '#dbdbdb'})
    const [redirect, setRedirect] = useState(false)
    const [failedMessage, setFailedMessage] = useState('')

    useEffect(() => {
        document.title = 'Sign up'
    })

    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to="/" />
        }
    }

    const failed = () => {
        if (failedMessage) {
            return <p style={{color: '#b80000'}} className="font">{failedMessage}</p>
        } else {
            return null
        }
    }

    const logoStyle = {
        fontSize: '2.5rem',
        cursor: 'default',
        marginTop: '0px',
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const url = `${apiUrl}auth/signup`
        const body = {email, fullName, username, password}
        if (email && fullName && username && password) {
            Axios.post(url, body, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                setBorderSuccessStyle({borderColor: '#dbdbdb'})
                setRedirect(true)
            })
            .catch(err => {
                setFailedMessage('Email or username is already registered.')
                setBorderSuccessStyle({borderColor: '#b80000'})
            })
        } else {
            setFailedMessage('Fill up all fields.')
            setBorderSuccessStyle({borderColor: '#b80000'})
        }

    }

    return (
        <div className="signUpComponent">
            <div className="sign-up-wrapper">
                <div className="sign-up">
                    <h1 className="heading-logo" style={logoStyle}>
                        Instagram
                    </h1>
                    {renderRedirect()}
                    <form className="sign-up-form" onSubmit={(event) => handleSubmit(event)}>
                        <input placeholder="Email" type="text" className="input-field" onChange={event => setEmail(event.target.value)} style={borderSuccessStyle}/>
                        <input placeholder="Full Name" type="text" className="input-field" onChange={event => setFullName(event.target.value)} style={borderSuccessStyle}/>
                        <input placeholder="Username" type="text" className="input-field" onChange={event => setUsername(event.target.value)} style={borderSuccessStyle}/>
                        <input placeholder="Password" type="password" className="input-field" onChange={event => setPassword(event.target.value)} style={borderSuccessStyle}/>
                        {failed()}
                        <button type="submit" className="blueButton">Sign Up</button>
                    </form>
                </div>

                <div className="log-in">
                    <p className="log-in-question">Have an account?</p>
                    <Link to="/sign-in" style={{ textDecoration: 'none' }}>
                        <p className="log-in-link">Log in</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp
