import React from 'react'
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
import { connect } from 'react-redux'
import { UserState, IUser } from './redux/user/user.models'
import { setCurrentUser } from './redux/user/user.action'
import Post from './Pages/Post/post.component'
import BaseAction from './redux/base-action.model'
import UserActionTypes from './redux/user/user.types'


interface Props {
    user: UserState,
    setCurrentUser:  (user: IUser) => BaseAction<UserActionTypes, IUser>
}
class App extends React.Component<Props> {
    componentDidMount() {
        const fetchToken = localStorage.getItem('token')
        if (fetchToken) {
           const { email, userId, exp } = JSON.parse(atob(fetchToken.split('.')[1]))
           if (new Date().getTime() < exp * 1000) {
             this.props.setCurrentUser({email, userId, exp})
           } else {
               localStorage.setItem('token', '')
           }
        }
    }

    render() {
        return (
            <div className="App">
                <NavBar />
                <Switch>
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
                    {this.props.user.currentUser ? <Route path="/profile" auth={true} component={Profile}/> : <GuardedRoute path="/profile" auth={false} component={Profile}/>}
                    


                    <Route exact path="/:username" component={Profile}></Route>

                    <Route exact path="/p/:postId" component={(routerProps: { match: { params: { postId: any } } }) => <Post postId={routerProps.match.params.postId} />}></Route>

                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    user: state.user,
})

const mapDispatchToProps = (dispatch: any) => ({ setCurrentUser: (user: IUser) => dispatch(setCurrentUser(user)) })

export default connect(mapStateToProps, mapDispatchToProps)(App)


