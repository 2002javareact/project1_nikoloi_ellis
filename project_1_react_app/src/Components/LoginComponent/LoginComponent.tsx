import React, { SyntheticEvent } from 'react';
import axios from 'axios';
//import { Form, Button, Col} from 'react-bootstrap';
import { Redirect } from 'react-router';

import '../../assets/Loginstyle.css';



interface ILoginState {
      handler: (changeUsername:string,
        changePassword: string,
        changeFirstName: string,
        changeLastName: string,
        changeEmail: string,
        changeUserId:number,
        changeLoggedIn:boolean)=> void,
     
     
}


  export class LoginComponent extends React.Component<ILoginState,any> {
  
   
    constructor(props:any){
      super(props);
      this.state = {
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        email: '',
        userid:0,
        loggedin:false

      };
    }
  

    handleUsername = async(e: any) =>
    {
      this.setState({username: e.target.value})
      
    }
    handlePassword = async(e: any) =>
    {
      this.setState({password: e.target.value})
      
      
    }


    handleSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();
      let user = {
        username:  this.state.username,
        password: this.state.password
    }

    
      
      try{

      
  
      
      axios.post(`/login`, user)
      .then(res => {
      //Console out for debuging
        console.log(res)
        console.log(res.data)
        console.log(res.data.username)
        console.log(res.data.firstname)
        console.log(res.data.lastname)
        console.log(res.data.email)
        console.log(res.data.userid)
        //All actions and states go here
        //Map all the userdata to this
        
        this.setState({firstname: res.data.firstname})
        this.setState({lastname: res.data.lastname})
        this.setState({email: res.data.email})
        this.setState({userid: res.data.userid})
        this.setState({loggedin: true})
        this.props.handler(
          res.data.username,
           res.data.password,res.data.firstname,
           res.data.lastname,res.data.email,res.data.userid, this.state.loggedin)
        //Change the login state equal to true 
       
      })
    }catch(e){
      console.log(e.response.request._response);
    
    }
    }
  
  
    render(){
      
    
  return (
    /*TODO: This component should be responsible for rendering out the Navbar component and sending 
    data to both the Navbar and the User through Routes  */
    this.state.loggedin ? 


    <Redirect to='/'
    /> : 


    
//           <Form onSubmit={this.handleSubmit}>
      
     
   
  
//   <Form.Group  controlId="formBasicEmail">
//   <Col sm={6}>
//     <Form.Label>Username</Form.Label>
//     </Col>
//     <Col sm={6}>
//     <Form.Control onChange={this.handleUsername} type="text" placeholder="Enter username now!" /> 
//     <Form.Text className="text-muted">
//       We'll never share your username with anyone else.
//     </Form.Text>
//     </Col>
//   </Form.Group>
//   <Col sm={6}>
//   <Form.Group controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//      <Form.Control onChange={this.handlePassword} type="password" placeholder="Password" /> 
//   </Form.Group>
//   </Col> 
//   <Col sm={6}>
//   <Form.Group controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>
  
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
//   </Col>
// </Form> 

<div className="wrapper fadeInDown">
  <div id="formContent">
    <h2 className="active"> Sign In </h2>
    <h2 className="inactive underlineHover">Sign Up </h2>
    <form  onSubmit={this.handleSubmit}>
      <input onChange={this.handleUsername} type="text" id="login" className="fadeIn second" name="login" placeholder="login" required/>
      <input  onChange={this.handlePassword} type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" className="fadeIn fourth" value="Log In"/>
    </form>

  </div>
</div>



    );
  };
}
  
  export default LoginComponent;