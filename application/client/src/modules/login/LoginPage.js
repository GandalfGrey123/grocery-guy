import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {
	Form, Button, Navbar, 
	Container, Row, Col, Alert,
} from 'react-bootstrap';

import './styles/LoginPage.css'
import { userLogin, openRegistrationWindow } from '../../api/user.actions';

class LoginPage extends Component {

	 constructor(props){
	   super(props);
	    this.state = {
	     loginForm:{
	   	  email: '',
	   	  password: '',
	     },

	     loginSuccess: false,	
	     message:{
	     	open: false,
	     	description: '',
	     }	         
	   };		 
	 }

	 handleFormSubmit = () =>{
	   userLogin(this.state.loginForm, (data) =>{	   	
	   	this.setState({
	   	   message: { open: false, description: '' },
	   	   loginSuccess: true
	   	});

	   },(errorStatus) => {
	   	if(errorStatus === 401){
	   	 this.setState({
	   	 	message: { open: true, description: 'Invalid Email or Password' },
	   	 	loginSuccess: false
	   	 });
	   	}
	   	alert('Insolent User! You Have Failed To Login!');
	   })
	 };

	 handleFormChange = (event) => {		
	   this.setState({
   	     loginForm:{
   	       ...this.state.loginForm,
   	       [event.target.name]: event.target.value,
   	     },

   	     message:{
   	     	open: false,
   	     	description: '',
   	     }

	   })

     };

	render() {
		const { loginForm , message, loginSuccess} = this.state;

		if(loginSuccess){
			return <Redirect to={'/Home'} />
		}

		return (
		  <div>


				<Container className="mainContent"> 
				{	
					message.open &&
					<Row className="justify-content-md-center">
					<Col></Col>
					<Col md={8} xs={8}>
					<Alert variant="danger" >
         			 <p className="text-center">         		
         			 	{message.description}
         			 </p>
        			</Alert>
        			</Col>
        			<Col></Col>
        			</Row>
				 }
				
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
							   variant="secondary"
							   type="submit"
							   block
							   onClick={this.handleFormSubmit.bind(this)}
							 >
							   Submit
               </Button>

							 <Button
							   variant="success"
							   type="submit"
							   block
							   onClick = {openRegistrationWindow}
							  >
							   Register
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