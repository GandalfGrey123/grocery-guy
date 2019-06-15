import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { authSession } from '../../api/user.actions';

class HomePage extends Component {

	constructor(props){
	   super(props);
	   this.state = {
		authorized: true,
	   }		 
	 }

	 componentDidMount(){		 
	  authSession((isValid)=>{	  	
	  	this.setState({
		  authorized: isValid,
	  	});
	  });
	 }

	render(){
	  const{authorized} = this.state;

	  if(!authorized){
		return <Redirect to="/"/>;
	  }
	  
	  return(
	     <div>
	       
	     </div>
	  );
	}
}
export default (HomePage);