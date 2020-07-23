import React from 'react'
import { Link } from 'react-router-dom'

import './signin.styles.scss'

const SignIn = () => {
    const logoStyle = {
        fontSize: '2.5rem',
        cursor: 'default',
        marginTop: "0px"
    }
    return (
        <div>
            <div className="SI-sign-in-wrapper">
                <div className="SI-sign-in">
                    <h1 className="heading-logo" style={logoStyle}>
                        Instagram
                    </h1>
                    <form action="" className="SI-sign-in-form">
                        <input placeholder="Username or email" type="text" className="input-field" />
                        <input placeholder="Password" type="text" className="input-field" />
                    </form>
                    <button className="blueButton">Log In</button>
                </div>

                <div className="SI-sign-up">
                    <p className="SI-sign-up-question">Don't have an account?</p>
                    <Link to="/sign-up" style={{ textDecoration: 'none' }}>
                        <p className="SI-sign-up-link">Sign up</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn
