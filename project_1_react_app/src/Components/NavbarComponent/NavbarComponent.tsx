import React from 'react';
import {  Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export class NavbarComponent extends React.Component<any,any> {

  

    render(){

 
        return(

            <Navbar bg="light" expand="lg">
              <Link to="/">
  <Navbar.Brand>Get-Reimburst!</Navbar.Brand> </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
   
      <Nav.Link ><Link to="/">Home</Link></Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
       
        <NavDropdown.Item> <Link to="/sendReimbursements">Send Reimbursements</Link></NavDropdown.Item>
        
        {/*TODO should send data to seeReimbursements specifically the ID*/}
        
        <NavDropdown.Item ><Link to="/seeReimbursements">See Reimbursements</Link> </NavDropdown.Item>
        
        <NavDropdown.Item><Link to="/seeReimbursementsById">See Reimbursements By ID</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/seeReimbursementsByStatus">See Reimbursements By Status</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/seeOneUser">See One User by Id</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/seeAllUsers">See All Users</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/updateUser">Update User</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/remApproval">Rembuirsement Approval</Link></NavDropdown.Item>

     
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>

        )
    }


}

export default NavbarComponent;