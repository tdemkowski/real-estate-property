import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import NavBar from './Components/Navbar/navbar.component'
import HomePage from './Pages/HomePage/homepage.component'
import SignIn from './Components/SignIn/signin.component'
import SignUp from './Components/SignUp/signup.component'
import Explore from './Components/Explore/explore.component'

class App extends Component {
    state = {
        searching: false
    }

    searchTool = (event: any) => {
        this.setState({searching: true})
        setTimeout(() => this.setState({searching: false}), 2000)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <NavBar searching={this.state.searching} search={this.searchTool} />
                </header>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/explore" component={Explore} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/sign-up" component={SignUp} />
                </Switch>
            </div>
        )
    }
}

export default App