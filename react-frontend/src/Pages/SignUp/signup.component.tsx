import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './signup.styles.scss'
import Axios from 'axios'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        document.title = 'Sign up'
    })

    const logoStyle = {
        fontSize: '2.5rem',
        cursor: 'default',
        marginTop: '0px',
    }

    const handleSubmit = () => {
        const url = 'http://localhost:3002/api/auth/signup'
        const body = {email, fullName, username, password}
        Axios.post(url, body)
    }

    return (
        <div className="signUpComponent">
            <div className="sign-up-wrapper">
                <div className="sign-up">
                    <h1 className="heading-logo" style={logoStyle}>
                        Instagram
                    </h1>
                    <form action="" className="sign-up-form">
                        <input placeholder="Email" type="text" className="input-field" onChange={event => setEmail(event.target.value)} />
                        <input placeholder="Full Name" type="text" className="input-field" onChange={event => setFullName(event.target.value)} />
                        <input placeholder="Username" type="text" className="input-field" onChange={event => setUsername(event.target.value)} />
                        <input placeholder="Password" type="text" className="input-field" onChange={event => setPassword(event.target.value)} />
                    </form>
                    <button className="blueButton" onClick={handleSubmit}>Sign Up</button>
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
