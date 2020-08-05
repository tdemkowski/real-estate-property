import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import NavBar from './Components/Navbar/navbar.component'
import HomePage from './Pages/HomePage/homepage.component'
import SignIn from './Pages/SignIn/signin.component'
import SignUp from './Pages/SignUp/signup.component'
import Explore from './Pages/Explore/explore.component'
import PageNotAvailable from './Pages/PageNotAvailable/pageNotAvailable.component'
import Profile from './Pages/Profile/profile.component'
class App extends Component {
    render() {
        return (
            <div className="App">

                <Switch>

                    <Route exact path="/">
                        <NavBar />
                        <HomePage />
                    </Route>
                    <Route path="/explore" >
                        <NavBar />
                        <Explore />
                    </Route>

                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/sign-up" component={SignUp} />

                    <Route path="/notFoundTest" >
                        <NavBar />
                        <PageNotAvailable />
                    </Route>
                    <Route path="/userTemp" >
                        <NavBar />
                        <Profile />
                    </Route>

                </Switch>
            </div>
        )
    }
}

export default App
