import React, { SyntheticEvent  } from 'react'
import { Form, Button} from 'react-bootstrap';
import { UserGenerateTableComponent } from "../UserGenerateTableComponent/UserGenerateTableComponent";
import axios from 'axios';


export class SeeOneUserComponent extends React.Component<any,any> {
    constructor(props:any){
        super(props)
        this.state = {
         userArr:[],
         userid:0
        }
      }
    
    
    

  handleStatus = async(e: any) =>
  {
    this.setState({userid:e.target.value})
    
  }

handleSubmit = async (e: SyntheticEvent) => {
  e.preventDefault();

  try{

  axios.get(`/users/${this.state.userid}`)
  .then(res => {
  //Console out for debuging
    console.log(res)
    console.log(res.data)
   this.setState({userArr:res.data})
   console.log(this.state.userArr);
//    console.log(res.data[0].userid)
  })
}catch(e){
  console.log(e.response.request._response);

}
}




  render() {
   console.log("The userID is: " + this.state.userid)
    let generateTablesArray:JSX.Element[] = []
        /*TODO: make the array generate tabales equal to the data  */
         for(let i = 0; i < this.state.userArr.length; i++){

           
              generateTablesArray.push(< UserGenerateTableComponent 
                userid={this.state.userArr[i].userid} 
                username = {this.state.userArr[i].username}
                password = {this.state.userArr[i].password}
                firstname = {this.state.userArr[i].firstname}
                lastname = {this.state.userArr[i].lastname}
                email = {this.state.userArr[i].email}
                role = {this.state.userArr[i].role}
              />)
            
          
         }
      return (


        
          <div>
            {generateTablesArray}

                 <Form onSubmit={this.handleSubmit}>
    <Form.Group  controlId="formBasicEmail">

      <Form.Label>See User By ID</Form.Label>
    
      <Form.Control  onChange={this.handleStatus}  type="number" placeholder= "Type in an User ID" /> 
  
    </Form.Group>
    <Button variant="primary" type="submit">
  Submit
</Button>
    </Form>
          </div>
      )
  }
}

export default SeeOneUserComponent
