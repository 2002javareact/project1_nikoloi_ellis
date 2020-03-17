import React, { SyntheticEvent } from 'react'
import { Form, Button} from 'react-bootstrap';
import { GenerateTableComponent } from "../GenerateTableComponent/GenerateTableComponent";
import axios from 'axios';



export class SeeReimbursementsById extends React.Component<any,any> {
  constructor(props:any){
    super(props)
    this.state = {
     reimbursementArr:[],
     userid:0
    }
  }



  handleUserId = async(e: any) =>
    {
      this.setState({userid: parseInt(e.target.value)})
      
    }

  handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
  
    try{

    axios.get(`/reimbursements/author/${this.state.userid}`)
    .then(res => {
    //Console out for debuging
      console.log(res)
      console.log(res.data)
     this.setState({reimbursementArr:res.data})
     console.log(this.state.reimbursementArr);
     console.log(res.data[0].datesubmitted)
    })
  }catch(e){
    console.log(e.response.request._response);
  
  }
  }




    render() {
      console.log("The userid is: " + this.state.userid);
      let generateTablesArray:JSX.Element[] = []
          /*TODO: make the array generate tabales equal to the data  */
           for(let i = 0; i < this.state.reimbursementArr.length; i++){

             
                generateTablesArray.push(<GenerateTableComponent amount={this.state.reimbursementArr[i].amount} 
                  author = {this.state.reimbursementArr[i].author}
                  datesumbitted = {this.state.reimbursementArr[i].datesubmitted}
                  dateresolved = {this.state.reimbursementArr[i].dateresolved}
                  description = {this.state.reimbursementArr[i].description}
                  resolver = {this.state.reimbursementArr[i].resolver}
                  status = {this.state.reimbursementArr[i].status}
                  type = {this.state.reimbursementArr[i].type}/>)
              
            
           }
        return (


          
            <div>
              {generateTablesArray}

                   <Form onSubmit={this.handleSubmit}>
      <Form.Group  controlId="formBasicEmail">
  
        <Form.Label>See Reimbursements By Id</Form.Label>
      
        <Form.Control  onChange={this.handleUserId}  type="number" placeholder= "Type in an Reimbursement ID" /> 
    
      </Form.Group>
      <Button variant="primary" type="submit">
    Submit
  </Button>
      </Form>
            </div>
        )
    }
}

export default SeeReimbursementsById
