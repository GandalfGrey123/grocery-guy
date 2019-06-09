import React, { Component } from 'react';
import {
	Form, Button, Navbar,
	Container, Row, Col,
} from 'react-bootstrap';

import './styles/LoginPage.css'
import { userLogin, redirectRegistration } from '../../api/user.actions';

class LoginPage extends Component {

	 constructor(props){
	   super(props);
	    this.state = {
	      loginForm:{
	   	   email: '',
	   	   password: '',
	      }
	   };		 
	 }

	 handleFormSubmit = () =>{
	   userLogin(this.state.loginForm, (data) =>{
	     //implement success
	   })
	 };

	 handleFormChange = (event) => {		
	   this.setState({
   	     loginForm:{
   	       ...this.state.loginForm,
   	       [event.target.name]: event.target.value,
   	     }
	   })
     };

	render() {
		const { loginForm } = this.state;
		return (
		  <div>
				<Navbar className="p-2" expand="lg" variant="light" bg="light">
					<Navbar.Brand href="#home">Gocery Guy version 1.0</Navbar.Brand>
				</Navbar>

				<Container className="mainContent"> 
					<Row className="justify-content-md-center mb-3">
						<h1> You Must Login !</h1>
					</Row>

					<Row className="justify-content-md-center">
						<Col></Col>
						<Col md={6} xs={7}>
							<Form className="mb-4">
							  <Form.Group controlId="formBasicEmail">
							  	<Form.Label>Email address</Form.Label>
							  	<Form.Control 
							  	  type="email" 
							  	  name='email'
							  	  placeholder="Enter email" 
							  	  value={loginForm.email}
							  	  onChange={this.handleFormChange.bind(this)}
							  	/>
							  </Form.Group>

							  <Form.Group controlId="formBasicPassword">
							  	<Form.Label>Password</Form.Label>
							  	<Form.Control 
							  	  type="password"
							  	  name='password' 
							  	  placeholder="Password" 
							  	  value={loginForm.password}
							  	  onChange={this.handleFormChange.bind(this)}
							  	/>
							  </Form.Group>
							</Form>

							 <Button
							   variant="success"
							   type="submit"
							   block
							   onClick = {redirectRegistration}
							  >
							   Register
               				 </Button>

							<Button
							   variant="secondary"
							   type="submit"
							   block
							   onClick={this.handleFormSubmit.bind(this)}
							 >
							   Submit
              				 </Button>
						</Col>						
						<Col></Col>
					</Row>
				</Container>

				<Navbar fixed="bottom">
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text href="#home">
							Gocery Guy version 1.0
		        </Navbar.Text>
					</Navbar.Collapse>
				</Navbar>
		   </div>
		);
	}
}
export default (LoginPage);