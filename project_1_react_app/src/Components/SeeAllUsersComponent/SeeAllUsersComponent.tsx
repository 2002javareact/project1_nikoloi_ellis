import React, { Component, SyntheticEvent  } from 'react'
import { Form, Button} from 'react-bootstrap';
import { UserGenerateTableComponent } from "../UserGenerateTableComponent/UserGenerateTableComponent";
import axios from 'axios';
export class SeeAllUsersComponent extends Component<any,any> {
    constructor(props:any){
        super(props)
        this.state = {
         userArr:[]
     
        }
      }
    
    
     

  

handleSubmit = async (e: SyntheticEvent) => {
  e.preventDefault();

  try{

  axios.get(`/users`)
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
    
    <Button variant="primary" type="submit">
  Click To See All Users
</Button>
    </Form>
          </div>
      )
  }
}

export default SeeAllUsersComponent
