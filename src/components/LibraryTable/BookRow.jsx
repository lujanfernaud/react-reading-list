import React, { Component } from 'react'
import StatusButton from './StatusButton'

class BookRow extends Component {
  render() {
    const { title, author, status } = this.props.book

    return(
      <tr>
        <td>{title}</td>
        <td>{author}</td>
        <td>
          <StatusButton
            status={status}
            onClick={this.handleClick.bind(this)}
          />
        </td>
        <td><a href='' className='delete is-large' /></td>
      </tr>
    )
  }

  handleClick(status) {
    const book = this.props.book
    const updatedBook = book.status = status

    this.props.onChange(updatedBook)
  }
}

export default BookRow
