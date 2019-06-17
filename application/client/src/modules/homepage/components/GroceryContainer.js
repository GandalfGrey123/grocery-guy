import React, { Component } from 'react';
import { 
  Container, Row, Col,
	Nav, Button, 
  Table, Card
} from 'react-bootstrap';


class GroceryContainer extends Component {

	constructor(props){
      super(props);       
      this.state ={
         groceryLists:[],
         viewFormat: 'grid',
      }
     }

     changeViewFormat(format){   
      this.setState({
        viewFormat: format
      });
     }
     
     displayGroceryLists(){

        if(this.state.viewFormat === 'grid'){
          return(
            <h1>grocery</h1>
          );
        }

        else if(this.state.viewFormat === 'list'){
          return(           
          <Row>
            <Col sm={4} md={4} lg={4}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th> Your Lists</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> none </td>              
                </tr>  
              </tbody>
            </Table>
            </Col>

            <Col sm={8} md={8} lg={8}>
              <Card body> 
                 <h2> List Archive Empty</h2>
              </Card>             
            </Col>
            </Row>
            );
        }
     }

	render(){
	  return(
	    <div>

           <Nav className="pt-5 pb-3 justify-content-center" variant="pills" defaultActiveKey={this.state.viewFormat+"-view"}>             
             <Nav.Item>
               <Nav.Link 
                 eventKey="list-view"
                 onClick={ (e) =>{ this.changeViewFormat('list') }}
               >
                <i class="fa fa-th-list" /> list 
               </Nav.Link>
             </Nav.Item>

             <Nav.Item>
               <Nav.Link 
                  eventKey="grid-view"
                  onClick={ (e) =>{ this.changeViewFormat('grid') }}
               >
               <i class="fa fa-th" /> grid
               </Nav.Link>
             </Nav.Item>
           </Nav>

        
            <Container fluid>
             { this.displayGroceryLists() }
            </Container>

            <Nav  
  			      className = "navbar fixed-bottom justify-content-end"
			      >

            <Button className="btn-outline-primary mr-2" variant="link" >              
              + Edit Lists
            </Button>

  		 	    <Button className="btn-outline-primary" variant="link" >              
              + New List
            </Button>
			      </Nav>	
	    </div>
	  );
	}
}
export default (GroceryContainer);