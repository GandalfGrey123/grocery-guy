import React, { Component } from 'react';
import { 
  Row, Col,
  Table, Card,
} from 'react-bootstrap';

class ListView extends Component {
  constructor(props){
   super(props); 
    this.state = {
     listItems: this.createList(this.props.items),
    }

    this.createList = this.createList.bind(this);
   }

  createList(items){
    let listContainers=[];

    for(let i =0; i < items.length; i++){
      listContainers.push(
        <tr>
         <td> { items[i].title } </td>         
        </tr>
      )
    }
    return listContainers
  }

  render(){
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
            {this.state.listItems}  
          </tbody>
        </Table>
        </Col>

        <Col sm={8} md={8} lg={8}>
          <Card body> 
             <h2> List Archive Empty</h2>

              <Table>
               <tbody>
                {                      
                  
                }
               </tbody>
              </Table>

          </Card>             
        </Col>
        </Row>

    )
  }
}

export default (ListView);