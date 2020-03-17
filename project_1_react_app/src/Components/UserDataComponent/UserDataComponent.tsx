import React from 'react';
import Table from 'react-bootstrap/Table';
//import axios from 'axios';

interface IUserInfoProps{
  username: '',
  firstname: '',
  lastname:  '',
  email: ''

}

export class UserDataComponent extends React.Component<IUserInfoProps,any>{

  



    render(){
        return(
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>username</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{this.props.username}</td>
            <td>{this.props.lastname}</td>
            <td>{this.props.firstname}</td>
            <td>{this.props.email}</td>
          </tr>
        </tbody>
      </Table>
      )
    }




}

export default UserDataComponent;