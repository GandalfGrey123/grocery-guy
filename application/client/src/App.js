import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './modules/login/LoginPage';
import HomePage from './modules/homepage/HomePage';

import "react-bootstrap/dist/react-bootstrap.min.js";

class App extends Component {

  render() {      
    return (
      <div>
        <BrowserRouter>
        <Switch>
        
        // all i need to do is make an loginSuccess state var in login component
        // then in login api call callback , redirect to homepage
        // last inside homepage have a authRequired state var checked when component mounts
        // check that by grabing it from session storage

          <Route path={'/Home'} component={HomePage} />
          <Route path={'/'} component={LoginPage} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default (App);