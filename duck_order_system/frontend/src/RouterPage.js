import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import WelcomePage from "./components/WelcomePage";
import {LoginPage} from './components/LoginPage/LoginPage';


import {Provider} from "react-redux";
import store from './store';
import {RegisterPage} from "./components/LoginPage/RegisterPage";


export default class RouterPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Router>
                        <Navbar/>
                        <Switch>
                            <Route exact path='/' component={WelcomePage}/>
                            <Route exact path='/order'>Should be the order page</Route>
                            <Route exact path='/store'>Should be the store page</Route>
                            <Route exact path='/login' component={LoginPage}/>
                            <Route exact path='/registration' component={RegisterPage}/>
                        </Switch>
                        <Footer/>
                    </Router>
                </div>
            </Provider>
        )
    }
}

