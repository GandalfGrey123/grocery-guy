import React, { Component } from 'react';
import {
   Container, Row, Col,
} from 'react-bootstrap';

class HomePage extends Component {

	 constructor(props){
	   super(props);		 
	 }

	render(){
	 const { loginForm } = this.state;
	 return(
	   <div>
	 	 <h1> Hello World ! </h1>
	   </div>
	 );
	}
}
export default (HomePage);