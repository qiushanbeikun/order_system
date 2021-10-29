import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import WelcomePage from "./WelcomePage";
import { LoginPage } from './LoginPage/LoginPage';

export default class RouterPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Router>
                    <Switch>
                        <Route exact path='/' component={WelcomePage} />
                        <Route path='/order'>Should be the order page</Route>
                        <Route path='/store'>Should be the store page</Route>
                        <Route path='/login' component={LoginPage}/>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        )
    }
}

