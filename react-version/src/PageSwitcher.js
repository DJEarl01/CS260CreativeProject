
import { BrowserRouter as Router, Routes, Route }
from 'react-router-dom';
import React, { Component, useState } from 'react';
import axios from 'axios';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CartPage from './CartPage';
import PropsPage from './PropsPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import ProductPage from './YeQuotesPage';

class PageSwitcher extends Component {
constructor() {
    super()
    this.state = {
        loggedIn: false,
        username: null
    }

    this.getLogin = this.getLogin.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
}

componentDidMount() {
    this.getLogin();
}

updateUser(userObject) {
    this.setState(userObject)
}

getLogin() {
    axios.get('/user/').then(response => {
        console.log('Get user response: ')
        console.log(response.data)
        if (response.data.user) {
            console.log('Get User: There is a user saved in the server session: ')

            this.setState({
                loggedIn: true,
                username: response.data.user.username
            })
        } else {
            console.log('Get user: no user');
            this.setState({
                loggedIn: false,
                username: null
            })
        }
    })
}

render() {
    return (
        <Router>
            <Routes>
                <Route exact path='CS260CreativeProject/react-version/build/' element={<HomePage updateUser={this.updateUser} loggedIn={this.state.loggedIn} username={this.state.username}/>} />
                <Route path='CS260CreativeProject/react-version/build/about' element={<AboutPage updateUser={this.updateUser} loggedIn={this.state.loggedIn} username={this.state.username}/>} />
                <Route path='CS260CreativeProject/react-version/build/cart' element={<CartPage updateUser={this.updateUser} loggedIn={this.state.loggedIn} username={this.state.username}/>} />
                <Route path='CS260CreativeProject/react-version/build/props' element={<PropsPage updateUser={this.updateUser} loggedIn={this.state.loggedIn} username={this.state.username}/>} />
                <Route path='CS260CreativeProject/react-version/build/login' element={<LoginPage updateUser={this.updateUser} loggedIn={this.state.loggedIn} username={this.state.username}/>} />
                <Route path='CS260CreativeProject/react-version/build/signup' element={<SignUpPage updateUser={this.updateUser} loggedIn={this.state.loggedIn} username={this.state.username}/>} />
                <Route path='CS260CreativeProject/react-version/build/product' element={<ProductPage />} />
            </Routes>
        </Router>
    );
}
}

export default PageSwitcher;