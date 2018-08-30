import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.titleInput = React.createRef()
    this.authorInput = React.createRef()
    this.urlInput = React.createRef()
    this.statusInput = React.createRef()

    this.handleInput = this._handleInput.bind(this)
    this.handleSubmit = this._handleSubmit.bind(this)
  }

  componentDidUpdate() {
    if (!this.props.modalActive) { return }

    const titleInput = this.titleInput.current

    titleInput.focus()

    if (titleInput.value === '') {
      titleInput.classList.remove('is-danger')
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} action='' className='form'>
        <div className='form__group field'>
          <label htmlFor='title' className='form__group-label label'>
            Title
          </label>
          <input ref={this.titleInput} onInput={this.handleInput}
            type='text' name='title' id='form-input-title'
            className='form__group-input input' placeholder='Book title'
            minLength='2' required />
        </div>

        <div className='form__group field'>
          <label htmlFor='author' className='form__group-label label'>
            Author
          </label>
          <input ref={this.authorInput} onInput={this.handleInput}
            type='text' name='author' id='form-input-author'
            className='form__group-input input' placeholder='Book author'
            minLength='2' required />
        </div>

        <div className='form__group field'>
          <label htmlFor='url' className='form__group-label label'>
            Goodreads URL (Optional)
          </label>
          <input ref={this.urlInput}
            type='url' name='url'
            placeholder='https://www.goodreads.com/book/show/111111.Book_Title'
            id='form-input-url'
            className='form__group-input input' />
        </div>

        <div className='form__group field'>
          <label htmlFor='status' className='form__group-label label'>
            Status
          </label>
          <div className='control'>
            <div className='select'>
              <select ref={this.statusInput}
                name='status' id='form-select'
                className='form__group-select'>
                <option value='Read'>Read</option>
                <option value='Not read' selected>Not read</option>
              </select>
            </div>
          </div>
        </div>

        <div className='form__group field'>
          <button type='submit'
            className='form__group-button button button-lg is-primary'>
            Add book
          </button>
        </div>
      </form>
    )
  }

  // private

  _handleInput(event) {
    const field = event.target

    if (!field.validity.valid) {
      field.classList.remove('is-primary')
      field.classList.add('is-danger')
    } else {
      field.classList.remove('is-danger')
      field.classList.add('is-primary')
    }
  }

  _handleSubmit(event) {
    event.preventDefault()

    const book = {
      title: this.titleInput.current.value,
      author: this.authorInput.current.value,
      url: this.urlInput.current.value,
      status: this.statusInput.current.value
    }

    this.props.onSubmit(book)
  }
}

export default Form
