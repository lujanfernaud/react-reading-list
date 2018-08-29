import React, { Component } from 'react'
import StatusButton from './StatusButton'

class BookRow extends Component {
  constructor() {
    super()
    this.handleStatus = this._handleStatus.bind(this)
    this.handleDelete = this._handleDelete.bind(this)
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

  // private

  _handleStatus(status) {
    const book = this.props.book
    const updatedBook = book.status = status

    this.props.onChange(updatedBook)
  }

  _handleDelete() {
    const book = this.props.book

    this.props.onDelete(book)
  }
}

export default BookRow
