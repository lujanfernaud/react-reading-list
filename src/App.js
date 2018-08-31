import React, { Component } from 'react'

import Seeds from './lib/seeds'
import LocalStorage from './lib/localStorage'

import LibraryTable from './components/LibraryTable'
import AddBookButton from './components/AddBookButton'
import Modal from './components/Modal'

class App extends Component {
  constructor() {
    super()
    this._localStorage = new LocalStorage()
    this._seeds = new Seeds()

    this.state = {
      books: this._populateBooks(),
      modalActive: false
    }

    this.handleChange = this._handleChange.bind(this)
    this.handleModalState = this._handleModalState.bind(this)
    this.handleSubmit = this._handleSubmit.bind(this)
  }

  render() {
    return (
      <div className='App container'>

        <header className='header'>
          <h1 className='header__h1'>Reading List</h1>

          <AddBookButton onClick={this.handleModalState} />
        </header>

        <main>
          <div className='row'>
            <LibraryTable
              books={this.state.books}
              onChange={this.handleChange}
            />
          </div>

          <div className='row row-btn'>
            <AddBookButton onClick={this.handleModalState} />
          </div>
        </main>

        <Modal
          active={this.state.modalActive}
          onClick={this.handleModalState}
          onSubmit={this.handleSubmit}
        />

      </div>
    )
  }

  // private

  _populateBooks() {
    if (localStorage.books && this._localStorage.booksNotEmpty()) {
      return this._booksWithId(this._localStorage.books)
    } else {
      return this._booksWithId(this._seeds.books.reverse())
    }
  }

  _booksWithId(books) {
    return books.map((book, index) => {
      book.id = index + 1
      return book
    })
  }

  _handleChange(books) {
    this.setState({ books: books })
    this._updateLocalStorage(books)
  }

  _updateLocalStorage(books) {
    if (!this._localStorage.available()) { return }

    this._localStorage.updateBooks(books)
  }

  _handleModalState() {
    this.setState({ modalActive: !this.state.modalActive })
  }

  _handleSubmit(book) {
    const books = [...this.state.books]
    const lastBook = books[books.length - 1]

    book.id = lastBook.id + 1

    books.push(book)

    this._handleModalState()
    this._handleChange(books)
  }
}

export default App
