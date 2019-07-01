import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import GroceryContainer from './components/GroceryContainer';
import MealContainer from './components/MealContainer';

import {
	Button, ButtonGroup, Dropdown,
	FormControl,
	Row, Col
} from 'react-bootstrap';

import { authSession } from '../../api/user.actions';

class HomePage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			authorized: true,
			containerType: 'grocery',
		}
	}

	changeContainer(type) {
		this.setState({
			containerType: type,
		})
	}

	displayContainer(container) {
		if (container === 'meal') {
			return (
				<MealContainer>

				</MealContainer>
			)

		}

		else if (container === 'grocery') {
			return (
				<GroceryContainer>

				</GroceryContainer>
			)
		}
	}

	buildDropMenu(type){
		if(type ==='meal'){
		 return(
			<Dropdown.Menu>
			<Dropdown.Item href="#/action-1">Date</Dropdown.Item>
			<Dropdown.Item href="#/action-2">Largest</Dropdown.Item>
			<Dropdown.Item href="#/action-3">Popular</Dropdown.Item>
		  </Dropdown.Menu>	
		 ) 		
		}
		else if(type === 'grocery'){
			return(
				<Dropdown.Menu>
				<Dropdown.Item href="#/action-1">Date</Dropdown.Item>
				<Dropdown.Item href="#/action-2"> Store </Dropdown.Item>			
			  </Dropdown.Menu>
			)
		}
	}

	authUser() {
	 authSession((isValid) => {
	 	this.setState({
	 		authorized: isValid,
	 	});
	 });
	}

	componentDidMount() {
	  this.authUser()
	}

	render() {
		const { authorized } = this.state;

		if (!authorized) {
			return <Redirect to="/" />;
		}

		return (
			<div>

				<Row className="p-3">
					<Col xs={4}  sm={4} md={2} lg={2}>
						<div className="d-flex flex-column">
							<ButtonGroup >
								<Button
									variant="secondary"
									active={ this.state.containerType === 'meal' ? true : false}								
									onClick={(e) => this.changeContainer("grocery")}
								>
									Grocery
								</Button>

								<Button
									variant="secondary"	
									active={ this.state.containerType === 'grocery' ? true : false}									
									onClick={(e) => this.changeContainer("meal")}
								>
									Meal
								</Button>
							</ButtonGroup>
						</div>
					</Col>
					<Col  xs={12} sm={4} md={6} lg={6}>
						
					  <FormControl type="text" placeholder="Search" />							
						
					</Col>

					<Col xs={12} sm={2} md={2}>
					<div className="d-flex flex-column">
					<Button variant="outline-primary"  >Search</Button>
					</div>
					</Col>

					<Col xs={12} sm={2} md={2}>
					<div className="d-flex flex-column">
						<Dropdown>
							<Dropdown.Toggle variant="light" id="dropdown-basic">
								Sort By
	  						</Dropdown.Toggle>

							{ this.buildDropMenu( this.state.containerType ) }
						</Dropdown>
						</div>
					</Col>


				</Row>

				{this.displayContainer(this.state.containerType)}
			</div>
		);
	}
}
export default (HomePage);

