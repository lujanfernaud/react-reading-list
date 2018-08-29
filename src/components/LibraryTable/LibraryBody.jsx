import React, { Component } from 'react'
import BookRow from './BookRow'

class Library extends Component {
  constructor(props) {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  render() {
    return (
      <tbody className='table__body'>
        {
          this.props.books.map(book => {
            return (
              <BookRow
                key={book.id}
                book={book}
                onChange={this.handleChange}
                onDelete={this.handleDelete}
              />
            )
          })
        }
      </tbody>
    )
  }

  handleChange(book) {
    const books = [...this.props.books]
    const index = books.indexOf(book)

    books[index] = book

    this.props.onChange(books)
  }

  handleDelete(book) {
    const books = this.props.books
    const filteredBooks = books.filter(item => item !== book)

    this.props.onChange(filteredBooks)
  }
}

export default Library
