import React, { Component } from 'react'
// import {Table} from 'react-bootstrap';

import '../../assets/TableStyle.css'



interface IUserFieldsProps{ 

    userid:0,
	username:'',
	password: '',
	firstname:'',
	lastname: '',
	email: '',
	role: 0


}
export class UserGenerateTableComponent extends Component<IUserFieldsProps,any> {
    render() {
        return (
          //   <Table striped bordered hover variant="dark" responsive>
          //   <thead>
          //     <tr>
               
          //       <th>User ID</th>
          //       <th>Username</th>
          //       <th>Password</th>
          //       <th>First Name</th>
          //       <th>Last Name</th>
          //       <th>Email</th>
          //       <th>Role</th>
               
          //     </tr>
          //   </thead>
          //   <tbody>
              
            
          //     <tr>
          //       <td>{this.props.userid}</td>
          //       <td>{this.props.username}</td>
          //       <td>{this.props.password}</td>
          //       <td>{this.props.firstname}</td>
          //       <td>{this.props.lastname}</td>
          //       <td>{this.props.email}</td>
          //       <td>{this.props.role}</td>
             
          //     </tr>
          //   </tbody>
            
          // </Table>


          <div className="table-users">
   
   
          <table cellSpacing="0">
             <tr>
               <th>Profile Picture</th>
             <th>User ID</th>
                 <th>Username</th>
               <th>Password</th>
                 <th>First Name</th>
                 <th>Last Name</th>
                <th>Email</th>
                 <th>Role</th>
             </tr>
       
             <tr>
                <td><img src="https://i.picsum.photos/id/1005/100/100.jpg" alt="" /></td>
                       <td>{this.props.userid}</td>
                 <td>{this.props.username}</td>
                <td>{this.props.password}</td>
                <td>{this.props.firstname}</td>
                 <td>{this.props.lastname}</td>
                 <td>{this.props.email}</td>
                 <td>{this.props.role}</td>
             </tr>
          </table>
       </div>
        )
    }
}

export default UserGenerateTableComponent
