import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './signin.styles.scss'

const SignIn = () => {
    useEffect(() => {
        document.title = 'Sign in'
    })

    const logoStyle = {
        fontSize: '2.5rem',
        cursor: 'default',
        marginTop: '0px',
    }
    return (
        <div className="signInComponent">
            <div className="sign-in-wrapper">
                <div className="sign-in">
                    <h1 className="heading-logo" style={logoStyle}>
                        Instagram
                    </h1>
                    <form action="" className="sign-in-form">
                        <input placeholder="Username or email" type="text" className="input-field" />
                        <input placeholder="Password" type="text" className="input-field" />
                    </form>
                    <button className="blueButton">Log In</button>
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

export default SignIn
