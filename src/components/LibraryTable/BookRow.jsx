import React, { Component } from 'react'
import StatusButton from './StatusButton'

class BookRow extends Component {
  constructor() {
    super()
    this.handleStatus = this.handleStatus.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  render() {
    const { title, author, status } = this.props.book

    return(
      <tr>
        <td>{title}</td>
        <td>{author}</td>
        <td>
          <StatusButton status={status} onClick={this.handleStatus} />
        </td>
        <td>
          <button className='delete is-large' onClick={this.handleDelete} />
        </td>
      </tr>
    )
  }

  handleStatus(status) {
    const book = this.props.book
    const updatedBook = book.status = status

    this.props.onChange(updatedBook)
  }

  handleDelete() {
    const book = this.props.book

    this.props.delete(book)
  }
}

export default BookRow
