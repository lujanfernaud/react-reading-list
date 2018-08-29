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
            onClick={this.handleStatusClick.bind(this)}
          />
        </td>
        <td>
          <button
            className='delete is-large'
            onClick={this.handleDeleteClick.bind(this)} />
        </td>
      </tr>
    )
  }

  handleStatusClick(status) {
    const book = this.props.book
    const updatedBook = book.status = status

    this.props.onChange(updatedBook)
  }

  handleDeleteClick() {
    const book = this.props.book

    this.props.delete(book)
  }
}

export default BookRow
