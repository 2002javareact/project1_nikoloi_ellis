import React, { SyntheticEvent } from 'react';
import { Button} from 'react-bootstrap';
import { GenerateTableComponent } from "../GenerateTableComponent/GenerateTableComponent";
import axios from 'axios';

interface ISeeRemProps{
  userid:number
}
export class SeeReimbursements extends React.Component<ISeeRemProps,any>{

  constructor(props:any){
    super(props)
    this.state = {
     reimbursementArr:[],
   
    }
  }



  //Request
  
  handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
  
    try{

    

    
    axios.get(`/reimbursements/author/${this.props.userid}`)
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





    render(){
      console.log("The userid is: " + this.props.userid);
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
         

        return(

     
        <div>

        
         {generateTablesArray}
         
          <Button  onClick={this.handleSubmit} variant="primary">Press To See Reimbursements</Button>

          </div>
          )
    }


}


export default SeeReimbursements;