import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WelcomePage from "./WelcomePage";


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
                        <Route path='/home' component={WelcomePage} />
                        <Route path='/order'>Should be the order page</Route>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        )
    }
}

