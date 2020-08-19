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
import GuardedRoute from './HighOrderComponents/guard-route.hoc'
class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <NavBar />
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/explore">
                        <Explore />
                    </Route>

                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/sign-up" component={SignUp} />

                    <Route path="/notFoundTest">
                        <PageNotAvailable />
                    </Route>
                    <GuardedRoute path="/userTemp" auth component={Profile}/>
                </Switch>
            </div>
        )
    }
}

export default App
