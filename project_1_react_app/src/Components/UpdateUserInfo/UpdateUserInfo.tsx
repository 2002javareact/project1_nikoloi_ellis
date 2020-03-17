
import React, {Component, SyntheticEvent } from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';



export class UpdateUserInfo extends Component<any,any> {
    

  constructor(props:any){
    super(props)
    this.state = {
      userid: 0,
      username: '',
      password:'',
      firstname:'',
      lastname:'',
      email: '',
      role: 0,
      
    }

  }


  handleUserId = async(e: any) =>
  {
    this.setState({ userid: parseInt(e.target.value)})
    
  }
  handleUsername = async(e: any) =>
  {
   this.setState({username: e.target.value})
    
    
  }
  handlePassword = async(e: any) =>
  {
    this.setState({password: e.target.value})
    
    
  }
  handleFirstName = async(e: any) =>
  {
     this.setState({firstname: e.target.value})
    
  }
  handleLastName = async(e: any) =>
  {
    this.setState({lastname: e.target.value})
    
  }
  handleEmail = async(e: any) =>
  {
    this.setState({email: e.target.value})
    
  }
  handleRole = async(e: any) =>
  {
    this.setState({role: parseInt(e.target.value)})
    
  }


  //Axios Request 
  handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    let sendR = {
      userid:  this.state.userid,
      username: this.state.username ,//change a bit you should get username from login but for now keep it how it is
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      role: this.state.role,


  }
    console.log(sendR)
    try{

    

    
    axios.patch(`/users`, sendR)
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
    <Form.Label>Change userid</Form.Label>
    <Form.Control onChange={this.handleUserId} type="number" placeholder="userid" />
  </Form.Group>

    {/*Data needed is username the username should be the current user logged in rtn */ }
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Change UserName</Form.Label>
    <Form.Control onChange={this.handleUsername} type="text" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Change Password</Form.Label>
    <Form.Control onChange={this.handlePassword} type="text" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Change First Name</Form.Label>
    <Form.Control onChange={this.handleFirstName} type="text" placeholder="name@example.com" />
  </Form.Group>
 
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Change LastName</Form.Label>
    <Form.Control onChange={this.handleLastName} as="textarea" rows="3" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Change Email</Form.Label>
    <Form.Control onChange={this.handleEmail} type="text" placeholder="name@example.com" />
  </Form.Group>



  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Change Role</Form.Label>
    <Form.Control onChange={this.handleRole} type="number" placeholder="name@example.com" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Change User
  </Button>
</Form>





        )
    }

}

export default UpdateUserInfo
