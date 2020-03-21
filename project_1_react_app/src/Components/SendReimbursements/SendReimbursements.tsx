import React, { SyntheticEvent } from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';



export class SendReimbursements extends React.Component<any,any>{


  constructor(props:any){
    super(props)
    this.state = {
      reimbursementId: 0,
      author: 1,
      amount:0,
      datesubmitted:0,
      dateresolved:0,
      description: '',
      resolver: 1,
      status: 1,
      type: 0
    }

  }


  handleRemId = async(e: any) =>
  {
    this.setState({ reimbursementId: parseInt(e.target.value)})
    
  }
  handleAmount = async(e: any) =>
  {
   this.setState({amount: parseInt(e.target.value)})
    
    
  }
  handleDatesSub = async(e: any) =>
  {
    this.setState({datesubmitted: parseInt(e.target.value)})
    
    
  }
  handleDatesRes = async(e: any) =>
  {
     this.setState({dateresolved: parseInt(e.target.value)})
    
  }
  handleDescription = async(e: any) =>
  {
    this.setState({description: e.target.value})
    
  }
  handleResolver = async(e: any) =>
  {
    this.setState({resolver: parseInt(e.target.value)})
    
  }
  handleType = async(e: any) =>
  {
    this.setState({type: parseInt(e.target.value)})
    
  }


  //Axios Request 
  handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    let sendR = {
      reimbursementid:  this.state.reimbursementId,
      author: this.state.author ,//change a bit you should get author from login but for now keep it how it is
      amount: this.state.amount,
      datesubmitted: this.state.datesubmitted,
      dateresolved: this.state.dateresolved,
      description: this.state.description,
      resolver: this.state.resolver,
      status: this.state.status,
      type: this.state.type
  }
    console.log(sendR)
    try{

    

    
    axios.post(`/reimbursements`, sendR)
    .then(res => {
    //Console out for debuging
      console.log(res)
      console.log(res.data)
  
      //All actions and states go here
      //Map all the userdata to this
    
      //Change the login state equal to true 

    })
  }catch(e){
    console.log(e.response.request._response);
  
  }
  }

  

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>ReimbursementID</Form.Label>
    <Form.Control onChange={this.handleRemId} type="number" placeholder="ReimbursementID" />
  </Form.Group>

    {/*Data needed is author the author should be the current user logged in rtn */ }
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Amount</Form.Label>
    <Form.Control onChange={this.handleAmount} type="number" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Date Sumbitted</Form.Label>
    <Form.Control onChange={this.handleDatesSub} type="number" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Date Resolved</Form.Label>
    <Form.Control onChange={this.handleDatesRes} type="number" placeholder="name@example.com" />
  </Form.Group>
 
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Expense Description</Form.Label>
    <Form.Control onChange={this.handleDescription} as="textarea" rows="3" />
  </Form.Group>


 Types of Reimbursements 0 - Lodging
                          1 - Travel 
                          2 - Food
                          3 - Other

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Type of Reimbursement</Form.Label>
    <Form.Control onChange={this.handleType} type="number" placeholder="name@example.com" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit Reimbursement
  </Button>
</Form>





        )
    }



}


export default SendReimbursements;