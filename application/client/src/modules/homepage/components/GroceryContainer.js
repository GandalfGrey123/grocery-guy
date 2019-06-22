import React, { Component } from 'react';
import { 
  Container, Row, Col,
	Nav, Button, 
  Table, Card , Modal, Form , ListGroup,
} from 'react-bootstrap';
import { createGroceryList, getAllUsersLists , addGroceryItems } from '../../../api/grocerylist.actions';

class GroceryContainer extends Component {

	constructor(props){
   super(props);       
   this.state ={
      groceryLists:[],
      viewFormat: 'grid',
      showNewForm: false,
      nextListTitle: '',
      
      showDetail: false,
      currentListIndex: 0,

      itemListCache:[],
      newItemForm:{
        'name':'',
        'quantity':1,
        'store':'',
        'description':'',
      }
    }
   }


      getLists(){
        console.log('getting lists')
        getAllUsersLists((usersLists)=>{
          this.setState({
            groceryLists: usersLists,
          })
        })
      }

      saveNew(){
        console.log('calling save')
        createGroceryList(this.state.nextListTitle, (responseStatus) =>{ 
         this.getLists();
         this.handleClose();
        })             
      }

      handleTitleChange = (event) =>{
        this.setState({
          nextListTitle: event.target.value,
        })
      }

      handleClose(){
        //implement are you sure prompt before closing this?
       this.setState({ 
        showNewForm: false,
        showDetail: false,
       });
      }
    
      handleShowNew(){
        this.setState({ 
          showNewForm: true 
        });
      }

     changeViewFormat(format){   
      this.setState({
        viewFormat: format
      });
     }

     showListDetail( index ){
      this.setState({
        showDetail: true,
        currentListIndex: index,
      });
     }

     addItem(){
       this.setState({ 
         itemListCache: [
          ...this.state.itemListCache, 
          this.state.newItemForm
         ],
         newItemForm:{
            'name':'',
            'quantity':1,
            'store':'',
            'description':'',      
         },
        });
     }

     handleItemChange(event){
        this.setState({
          newItemForm:{
            ...this.state.newItemForm,
            [event.target.name]:  event.target.value 
          } 
        })
     }

     submitItems(){
      let index = this.state.currentListIndex; 
      addGroceryItems({
        'id':this.state.groceryLists[index]._id,
        'newItems':this.state.itemListCache,
      },()=>{
        this.setState({
          itemListCache:[],
          newItemForm:{
           'name':'',
           'quantity':1,
           'store':'',
           'description':'',      
          },
        });
      })
     }


     listDetail(){
      if(!this.state.showDetail){
        return;
      }

      var listObj = this.state.groceryLists[this.state.currentListIndex];
      return(
        <React.Fragment>
         <Modal.Header className="justify-content-center">
                <Modal.Title>
                  {listObj.title}
                </Modal.Title>
              </Modal.Header>

              <ListGroup className="drop-shadow">
                {
                  this.state.itemListCache.map((item)=>(
                    <ListGroup.Item>{item.name} ({item.quantity})</ListGroup.Item>
                  ))
                }
              </ListGroup>


              <Card className="p-2 mt-5">
              <Form>
                <Form.Row>
                <Col lg={4}>
                 <Form.Group controlId="">
                  <Form.Label>Item Name</Form.Label>
                  <Form.Control 
                    size="sm" 
                    placeholder="ex. corn"
                    name="name"
                    value={this.state.newItemForm.name}
                    onChange={this.handleItemChange.bind(this)}
                    />
                 </Form.Group>
                 </Col>

                 <Col lg={4}>
                 <Form.Group controlId="">
                  <Form.Label>Quantity (optional) </Form.Label>
                  <Form.Control  
                    size="sm" 
                    placeholder="1"
                    name="quantity"
                    value={this.state.newItemForm.quantity} 
                    onChange={this.handleItemChange.bind(this)}
                    />
                 </Form.Group>
                 </Col>

                 <Col lg={4}>
                 <Form.Group controlId="formGridAddress1">
                  <Form.Label>Store Name (optional)</Form.Label>
                  <Form.Control  
                    size="sm" 
                    placeholder="Trader Joes"
                    name="store"
                    value={this.state.newItemForm.store} 
                    onChange={this.handleItemChange.bind(this)}
                    />
                </Form.Group>
                </Col>


                </Form.Row>                

              <Button
                onClick = {()=>{this.addItem()}}
               >
                add item
              </Button>
              </Form>
              </Card>
            
          
              <Modal.Footer className="justify-content-center">
                 <Button 
                   variant="secondary"  
                   onClick={()=>{this.handleClose()}}
                   >
                   Cancel                 
                 </Button>
  
                 <Button 
                   variant="primary"                 
                   onClick={this.submitItems.bind(this)}     
                   >
                   Save List
                 </Button>
               </Modal.Footer>
               </React.Fragment>
      )
     }

     groceryRow(lists , offsetIndex){
      return(
        <React.Fragment>
        {

          lists.map((list, i)=>(
            <Col className="spacing" xs={4} sm={4} md={4} lg={4}>
             <Button 
                block 
                variant="light" 
                className="btn-fix text-left"
                onClick={()=>{ this.showListDetail(offsetIndex+i) }}
              >
              <Card key={offsetIndex+i} className="grocery-card drop-shadow">
               <Card.Body>
                 <Card.Title>{list.title}</Card.Title>
                   <Card.Subtitle className="mb-2 text-muted"> created 06/20/2019 </Card.Subtitle>
                 <Card.Text>  number of items: 0 </Card.Text>
                </Card.Body>
               </Card>
              </Button>
            </Col>
          ))

        }
        </React.Fragment>
      );
     }

     
     displayGroceryLists(){
        var listContainers=[]

        if(this.state.viewFormat === 'grid') {
          for(let i =0; i < this.state.groceryLists.length; i += 3){
            listContainers.push(
              <Row>
              {this.groceryRow( this.state.groceryLists.slice(i, i + 3) , i ) }
              </Row>
            );
          }
          return(
            <div>
            {listContainers}
            </div>
          );
        }

        else if(this.state.viewFormat === 'list'){
          
          for(let i =0; i < this.state.groceryLists.length; i++){
            listContainers.push(
              <tr>
               <td> {this.state.groceryLists[i].title} </td>         
              </tr>
            )
          }

          return(           
          <Row>
            <Col sm={4} md={4} lg={4}>
            <Table hover>
              <thead>
                <tr>
                  <th> Your Lists</th>
                </tr>
              </thead>
              <tbody>
                {listContainers}  
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

     componentWillMount(){
       this.getLists();
     }

	render(){
    const {nextListTitle, groceryLists} = this.state

	  return(
	    <div>

           <Nav className="pt-5 pb-3 justify-content-center" variant="pills" defaultActiveKey={this.state.viewFormat+"-view"}>             
             <Nav.Item>
               <Nav.Link 
                 eventKey="list-view"
                 onClick={ (e) =>{ this.changeViewFormat('list') }}
               >
                <i className="fa fa-th-list" /> list 
               </Nav.Link>
             </Nav.Item>

             <Nav.Item>
               <Nav.Link 
                  eventKey="grid-view"
                  onClick={ (e) =>{ this.changeViewFormat('grid') }}
               >
               <i className="fa fa-th" /> grid
               </Nav.Link>
             </Nav.Item>
           </Nav>

            <Container  className= "p-4 fill-height" fluid>
            <Container className="p-4 rounded fill-height drop-shadow" fluid>
             { this.displayGroceryLists() }
            </Container>
             </Container>

            <Container fluid>
            <Row>
            <Nav  
  			      className = "navbar fixed-bottom justify-content-end p-3 bg-light "
			      >

            <Button 
              className="btn-outline-primary mr-2" 
              variant="link" 
              size="lg"
             >              
              + Edit Lists
            </Button>

  		 	    <Button 
              className="btn-outline-primary" 
              variant="link" 
              onClick={()=>{this.handleShowNew()}}
              size="lg"
             >              
              + New List
            </Button>
			      </Nav>
            </Row>
            </Container>


            <Modal
            onHide={()=>{this.handleClose()}}             
            show={this.state.showDetail}
            size="lg"    
            className="lg-modal bg-modal"
            >
            <Modal.Body>
             { this.listDetail( this.state.currentListIndex ) }
            </Modal.Body>
            </Modal>

           <Modal
            onHide={()=>{this.handleClose()}} 
            show={this.state.showNewForm}
            size="md"    
            >
              <Modal.Header className="justify-content-center">
                <Modal.Title>Create new grocery list</Modal.Title>
              </Modal.Header>
            
              <Modal.Body>      
                <Form>
                 <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label><h5>Title / Name :</h5></Form.Label>
                      <Form.Control 
                      className="form-control-border" 
                      placeholder="ex. Today's List" 
                      value={nextListTitle}
                      onChange={this.handleTitleChange.bind(this)}
                      />
                 </Form.Group>               
                </Form>                    
               </Modal.Body>
  
              <Modal.Footer className="justify-content-center">
                 <Button 
                   variant="secondary"  
                   onClick={()=>{this.handleClose()}}
                   size="lg"
                   >
                   Cancel                 
                 </Button>
  
                 <Button 
                   variant="primary"                 
                   onClick={this.saveNew.bind(this)}
                   size="lg"
                   >
                   Save List
                 </Button>
               </Modal.Footer>
            </Modal>	
	    </div>
	  );
	}
}
export default (GroceryContainer);