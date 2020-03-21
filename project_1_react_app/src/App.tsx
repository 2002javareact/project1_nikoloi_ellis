import React from 'react';
import './App.css';
import LoginComponent from './Components/LoginComponent/LoginComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavbarComponent from './Components/NavbarComponent/NavbarComponent';
import UserDataComponent from './Components/UserDataComponent/UserDataComponent';
import SendReimbursements from './Components/SendReimbursements/SendReimbursements';
import SeeReimbursements from './Components/SeeReimbursements/SeeReimbursements'
import SeeReimbursementsById from './Components/SeeReimbursementsById/SeeReimbursementsById'
import SeeReimbursementsByStatus from './Components/SeeReimbursementByStatus/SeeReimbursementByStatus'
import SeeOneUserComponet from './Components/SeeOneUserComponent/SeeOneUserComponent'
import SeeAllUsersComponent from './Components/SeeAllUsersComponent/SeeAllUsersComponent'
import UpdateUserInfo from './Components/UpdateUserInfo/UpdateUserInfo'
import UpdateReimbursemens from './Components/UpdateReimbursements/UpdateReimbursemens';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { Redirect } from 'react-router';




class App extends React.Component<any,any> {
  constructor(props:any){
    super(props);

    this.handleStateChanges = this.handleStateChanges.bind(this);
   
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
      userid:0,
      loggedin:false,
      role:0

    };
  }
 

  componentDidMount() {
    document.body.style.backgroundColor = '#91CED4'
}
  //Function for handling parent states

    handleStateChanges= (changeUsername:string,
      changePassword:string, 
      changeFirstName:string,
      changeLastName:string,
      changeEmail:string,
      changeUserId:number,
      changeLoggedIn:boolean
      ) => {
      this.setState({username: changeUsername})
      this.setState({password: changePassword})
      this.setState({firstname: changeFirstName})
      this.setState({lastname: changeLastName})
      this.setState({email: changeEmail})
      this.setState({userid: changeUserId})
      this.setState({loggedin: changeLoggedIn})
   }
 
 render(){
   console.log(this.state.username + " " + this.state.email)
  return (
    <Router>
    <div className="App">

   
    {this.state.loggedin === true &&

    <Route  path="/" component={NavbarComponent}/>  
    }

    {this.state.loggedin === false &&
    <Redirect to='/login'
    /> 

    }
    

    
   <Switch>
  
    
    <Route exact path="/"  render={() =><UserDataComponent username={this.state.username}
    firstname={this.state.firstname} 
    lastname={this.state.lastname}
    email={this.state.email} />}/>
    <Route path="/login" render={()=><LoginComponent 
    handler={this.handleStateChanges}/>}/>
    <Route path="/sendReimbursements"component={SendReimbursements}/>
    <Route path="/seeReimbursements" render={() => <SeeReimbursements userid={this.state.userid}/>}/>
    <Route path="/seeReimbursementsById" component={SeeReimbursementsById}/>
    <Route path="/seeReimbursementsByStatus" component={SeeReimbursementsByStatus}/>
    <Route path="/seeOneUser" component={SeeOneUserComponet}/>
    <Route path="/seeAllUsers" component={SeeAllUsersComponent}/>
    <Route path="/updateUser" component={UpdateUserInfo}/>
    <Route path="/remApproval" component={UpdateReimbursemens}/>
    </Switch>
  

    </div>
    </Router>
  );
}
}

export default App;
