import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './signup.styles.scss'

const SignUp = () => {
    useEffect(() => {
        document.title = 'Sign up'
    })

    const logoStyle = {
        fontSize: '2.5rem',
        cursor: 'default',
        marginTop: '0px',
    }
    return (
        <div className="signUpComponent">
            <div className="sign-up-wrapper">
                <div className="sign-up">
                    <h1 className="heading-logo" style={logoStyle}>
                        Instagram
                    </h1>
                    <form action="" className="sign-up-form">
                        <input placeholder="Email" type="text" className="input-field" />
                        <input placeholder="Full Name" type="text" className="input-field" />
                        <input placeholder="Username" type="text" className="input-field" />
                        <input placeholder="Password" type="text" className="input-field" />
                    </form>
                    <button className="blueButton">Sign Up</button>
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
