import React, { Component } from 'react'
import StatusButton from './StatusButton'

class BookRow extends Component {
  render() {
    return(
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.author}</td>
        <td><StatusButton status={this.props.status} /></td>
        <td><a href='' className='delete is-large' /></td>
      </tr>
    )
  }
}

export default BookRow
