import React, { Component } from 'react';
import { 
	Nav , Button,
} from 'react-bootstrap';

class MealContainer extends Component {

	constructor(props){
      super(props);       
      this.state={
      	mealType:'all',
      }
	 }

	render(){
	  return(
	    <div>

		  <Nav className="pt-5 justify-content-center" variant="tabs" defaultActiveKey="tab-all">
			 <Nav.Item>
			 	<Nav.Link href="tab-all">All</Nav.Link>
			 </Nav.Item>

			 <Nav.Item>
			 	<Nav.Link eventKey="tab-break">Breakfast</Nav.Link>
			 </Nav.Item>

			 <Nav.Item>
			 	<Nav.Link eventKey="tab-lunch">Lunch</Nav.Link>
			 </Nav.Item>

			 <Nav.Item>
			 	<Nav.Link eventKey="tab-dinner"> Dinner</Nav.Link>
			 </Nav.Item>
						
			 <Nav.Item>
			 	<Nav.Link eventKey="tab-snacks"> Snacks</Nav.Link>
			 </Nav.Item>

			 <Nav.Item>
			 	<Nav.Link eventKey="tab-anytime"> Anytime</Nav.Link>
			 </Nav.Item>

		  </Nav>

		  <Nav  
  			className = "navbar fixed-bottom justify-content-end"
		   >
  		   <Button className="btn-outline-primary" variant="link" size="lg"> + New Meal</Button>
		  </Nav>	
	       
	    </div>
	  );
	}
}
export default (MealContainer);