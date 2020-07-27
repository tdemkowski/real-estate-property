import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import NavBar from './Components/Navbar/navbar.component'
import HomePage from './Pages/HomePage/homepage.component'
import SignIn from './Pages/SignIn/signin.component'
import SignUp from './Pages/SignUp/signup.component'
import Explore from './Pages/Explore/explore.component'
import pageNotAvailable from './Pages/PageNotAvailable/pageNotAvailable.component'

class App extends Component {
    state = {
        searching: false,
        viewActivity: false
    }

    searchTool = () => {
        this.setState({ searching: true })
        setTimeout(() => this.setState({ searching: false }), 2000)
    }

    viewActivitySwitch = () => {
        this.setState({ viewActivity: !this.state.viewActivity })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <NavBar
                        searching={this.state.searching}
                        search={this.searchTool}
                        viewActivity={this.state.viewActivity}
                        viewActivitySwitch={this.viewActivitySwitch}
                    />
                </header>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/explore" component={Explore} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/notFoundTest" component={pageNotAvailable} />
                </Switch>
            </div>
        )
    }
}

export default App
