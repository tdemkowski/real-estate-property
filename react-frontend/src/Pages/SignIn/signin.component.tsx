import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './signin.styles.scss'
import Axios from 'axios';
import apiUrl from '../../config';

const SignIn = () => {
    const [userOrEmail, setUserOrEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        document.title = 'Sign in'
    })

    const logoStyle = {
        fontSize: '2.5rem',
        cursor: 'default',
        marginTop: '0px',
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (userOrEmail && password) {
            let body;

            if (userOrEmail.includes('@')) {
                body = {
                    email: userOrEmail,
                    password
                }
               
            } else {
                body = {
                    username: userOrEmail,
                    password
                }
            }

            Axios.post(`${apiUrl}auth/signin`, body).then(res => {
                console.warn(res);
            }).catch(err => {
                console.error(err);
            })
        }
    }
    return (
        <div className="signInComponent">
            <div className="sign-in-wrapper">
                <div className="sign-in">
                    <h1 className="heading-logo" style={logoStyle}>
                        Instagram
                    </h1>
                    <form onSubmit={(event) => handleSubmit(event)} className="sign-in-form">
                        <input autoComplete="username" type="text" name="username" placeholder="Username or email" onChange={(event:  React.ChangeEvent<HTMLInputElement> ) => setUserOrEmail(event.target.value)} className="input-field" />
                        <input autoComplete="current-password" autoCapitalize="off" autoCorrect="off" type="password" name="password" placeholder="Password" onChange={(event:  React.ChangeEvent<HTMLInputElement> ) => setPassword(event.target.value)} className="input-field" />
                        <button type="submit" className="blueButton">Log In</button>
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

export default SignIn
