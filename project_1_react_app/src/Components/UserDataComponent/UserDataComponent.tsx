import React from 'react';
// import Table from 'react-bootstrap/Table';

import '../../assets/TableStyle.css'
interface IUserInfoProps{
  username: '',
  firstname: '',
  lastname:  '',
  email: ''

}

export class UserDataComponent extends React.Component<IUserInfoProps,any>{

  



    render(){
        return(
      //   <Table striped bordered hover variant="dark">
      //   <thead>
      //     <tr>
      //       <th>#</th>
      //       <th>username</th>
      //       <th>Last Name</th>
      //       <th>First Name</th>
      //       <th>email</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     <tr>
      //       <td>1</td>
      //       <td>{this.props.username}</td>
      //       <td>{this.props.lastname}</td>
      //       <td>{this.props.firstname}</td>
      //       <td>{this.props.email}</td>
      //     </tr>
      //   </tbody>
      // </Table>
      <div className="table-users">
   
   
      <table cellSpacing="0">
         <tr>
                     <th>Profile Picture</th>
                     <th>username</th>
             <th>Last Name</th>
             <th>First Name</th>
             <th>email</th>
         </tr>
   
         <tr>
            <td><img src="https://i.picsum.photos/id/1005/100/100.jpg" alt="" /></td>
            <td>{this.props.username}</td>
            <td>{this.props.lastname}</td>
             <td>{this.props.firstname}</td>
             <td>{this.props.email}</td>
         </tr>
      </table>
   </div>
      )
    }




}

export default UserDataComponent;