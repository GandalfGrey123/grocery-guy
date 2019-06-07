import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './modules/login/LoginPage';
import "react-bootstrap/dist/react-bootstrap.min.js";

class App extends Component {

  render() {      
    return (
      <div>
        <BrowserRouter>
        <Switch>
          <Route path={'/'} component={LoginPage} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default (App);