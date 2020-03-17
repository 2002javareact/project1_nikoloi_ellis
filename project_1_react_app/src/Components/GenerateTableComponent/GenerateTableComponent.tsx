import React, { Component } from 'react'
import {Table} from 'react-bootstrap';

interface IReimbursementFieldsProps{ 

    amount:number
    author:number
    datesumbitted:number
    dateresolved:number
    description:string
    resolver:number
    status:number
    type:number



}
export class GenerateTableComponent extends Component<IReimbursementFieldsProps, any> {



    render() {
        return (
            <Table responsive>
            <thead>
              <tr>
               
                <th>Author</th>
                <th>Amount</th>
                <th>Date Submitted</th>
                <th>Date Resolved</th>
                <th>Description</th>
                <th>Resolver</th>
                <th>Status</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              
            
              <tr>
                <td>{this.props.author}</td>
                <td>{this.props.amount}</td>
                <td>{this.props.datesumbitted}</td>
                <td>{this.props.dateresolved}</td>
                <td>{this.props.description}</td>
                <td>{this.props.resolver}</td>
                <td>{this.props.status}</td>
                <td>{this.props.type}</td>
              </tr>
            </tbody>
            
          </Table>
        )
    }
}

export default GenerateTableComponent
