import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";

import "./assets/scss/material-kit-react.scss";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import ProfilePage from "./views/ProfilePage/ProfilePage.js";
import Signup from "./views/SignupPage/SignupPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history = {hist}>
        <Switch>
            <Route path="/landing-page" component={LandingPage}/>
            <Route path="/login-page" component={LoginPage}/>
            <Route path="/profile-page" component={ProfilePage}/>
            <Route path="/signup-page" component={Signup}/>
            <Route path="/" component={LandingPage} />
        </Switch>
    </Router>,
    document.getElementById("root")
);