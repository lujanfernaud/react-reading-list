import React, { Component } from 'react'
import BookRow from './BookRow'

class Library extends Component {
  constructor() {
    super()
    this.state = {
      books: [
        {
          title: 'Night Watch',
          author: 'Terry Pratchett',
          url: 'https://www.goodreads.com/book/show/47989.Night_Watch',
          status: 'Not read',
          id: 1
        },
        {
          title: 'On the Shortness of Life',
          author: 'Seneca',
          url: 'https://www.goodreads.com/book/show/97412.On_the_Shortness_of_Life',
          status: 'Not read',
          id: 2
        },
        {
          title: 'Non Violent Communication',
          author: 'Marshall B. Rosenberg',
          url: 'https://www.goodreads.com/book/show/560861.Non_Violent_Communication',
          status: 'Read',
          id: 3
        },
        {
          title: 'As a Man Thinketh',
          author: 'James Allen',
          url: 'https://www.goodreads.com/book/show/81959.As_a_Man_Thinketh',
          status: 'Read',
          id: 4
        }
      ]
    }
  }

  render() {
    return (
      <tbody className='table__body'>
        {
          this.state.books.map(book => {
            return (
              <BookRow
                key={book.id}
                book={book}
                onChange={this.handleChange.bind(this)} />
            )
          })
        }
      </tbody>
    )
  }

  handleChange(book) {
    const books = [...this.state.books]
    const index = books.indexOf(book)

    books[index] = book

    this.setState({
      books: books
    })
  }
}

export default Library
