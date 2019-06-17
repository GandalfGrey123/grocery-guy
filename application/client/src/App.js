import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './modules/login/LoginPage';
import HomePage from './modules/homepage/HomePage';

import {Navbar} from 'react-bootstrap';


class App extends Component {

  render() {      
    return (
      <div>

        <Navbar className="p-3" expand="lg" variant="light" bg="light">
					<Navbar.Brand href="#home">Gocery Guy version 1.0</Navbar.Brand>
				</Navbar>

        <BrowserRouter>
         <Switch>                   
         
           <Route path={'/Home'} component={HomePage} />
           <Route path={'/'} component={LoginPage} />           
         </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default (App);