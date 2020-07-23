import React from 'react'
import { Link } from 'react-router-dom'

import './signup.styles.scss'

const SignUp = () => {
    const logoStyle = {
        fontSize: '2.5rem',
        cursor: 'default',
        marginTop: "0px"
    }
    return (
        <div>
            <div className="SU-sign-up-wrapper">
                <div className="SU-sign-up">
                    <h1 className="heading-logo" style={logoStyle}>
                        Instagram
                    </h1>
                    <form action="" className="SU-sign-up-form">
                        <input placeholder="Email" type="text" className="input-field" />
                        <input placeholder="Full Name" type="text" className="input-field" />
                        <input placeholder="Username" type="text" className="input-field" />
                        <input placeholder="Password" type="text" className="input-field" />
                    </form>
                    <button className="blueButton">Sign Up</button>
                </div>

                <div className="SU-log-in">
                    <p className="SU-log-in-question">
                        Have an account?
                    </p>
                    <Link to="/sign-in" style={{ textDecoration: 'none' }}>
                        <p className="SU-log-in-link">Log in</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp
