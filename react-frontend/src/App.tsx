import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import NavBar from './Components/Navbar/navbar.component'
import HomePage from './Pages/HomePage/homepage.component'
import SignIn from './Components/SignIn/signin.component'
import SignUp from './Components/SignUp/signup.component'
import Explore from './Components/Explore/explore.component'


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar/>
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

export default App

// render() {
//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/shop" component={ShopPage} />
//           <Route path="/signin" render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage />)} />
//           <Route exact path="/checkout" component={CheckoutPage}/>
//         </Switch>
//       </div>
//     );
//   }