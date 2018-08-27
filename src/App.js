import React, { Component } from 'react'
import LibraryTable from './components/LibraryTable'

class App extends Component {
  render() {
    return (
      <div className='App container'>

        <header className='header'>
          <h1 className='header__h1'>Reading List</h1>
          <button className='button button-lg is-primary open-modal'>
            Add book
          </button>
        </header>

        <main>
          <div className='row'>
            <LibraryTable />
          </div>

          <div className='row row-btn'>
            <button className='button button-lg is-primary open-modal'>
              Add book
            </button>
          </div>
        </main>

        <div className='modal' id='modal'>
          <div className='modal__backdrop' id='modal-backdrop'></div>
          <div className='modal__content'>

            <span className='close' id='close-modal'>&times;</span>

            <form action='' className='form'>
              <div className='form__group field'>
                <label htmlFor='title' className='form__group-label label'>
                  Title *
                </label>
                <input type='text' name='title' id='form-input-title'
                  className='form__group-input input' placeholder='Book title' minLength='2' required autoFocus='' />
              </div>

              <div className='form__group field'>
                <label htmlFor='author' className='form__group-label label'>
                  Author *
                </label>
                <input type='text' name='author' id='form-input-author'
                  className='form__group-input input' placeholder='Book author' minLength='2' required />
              </div>

              <div className='form__group field'>
                <label htmlFor='url' className='form__group-label label'>
                  Goodreads URL
                </label>
                <input type='url' name='url' placeholder='https://www.goodreads.com/book/show/111111.Book_Title' id='form-input-url'
                  className='form__group-input input' />
              </div>

              <div className='form__group field'>
                <label htmlFor='status' className='form__group-label label'>
                  Status
                </label>
                <div className='control'>
                  <div className='select'>
                    <select name='status' id='form-select'
                      className='form__group-select'>
                      <option value='Read'>Read</option>
                      <option value='Not read' selected>Not read</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className='form__group field'>
                <button type='submit'
                  className='form__group-button button button-lg is-primary'
                  id='submit'>
                  Add book
                </button>
              </div>
            </form>

          </div>
        </div>

      </div>
    )
  }
}

export default App
