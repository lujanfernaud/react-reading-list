import React, { Component } from 'react'

class Form extends Component {
  static get GoodreadsURL() {
    return /(https:\/\/www.goodreads.com\/book\/show\/\d{1,8}\.\w{2,35})/g
  }

  constructor() {
    super()
    this.titleInput = React.createRef()
    this.authorInput = React.createRef()
    this.urlInput = React.createRef()
    this.statusInput = React.createRef()

    this.handleInput = this._handleInput.bind(this)
    this.handleClick = this._handleClick.bind(this)
    this.handleSubmit = this._handleSubmit.bind(this)
  }

  componentDidUpdate() {
    if (!this.props.modalActive) { return }

    this.titleInput.current.focus()

    this._removeValidationErrorsStyling()
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
          <button onClick={this.handleClick}
            type='submit'
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
      this._setFieldAsInvalid(field)
    } else {
      this._setFieldAsValid(field)
    }
  }

  _setFieldAsInvalid(field) {
    field.classList.remove('is-primary')
    field.classList.add('is-danger')
  }

  _setFieldAsValid(field) {
    field.classList.remove('is-danger')
    field.classList.add('is-primary')
  }

  _handleClick(event) {
    const titleInput = this.titleInput.current
    const authorInput = this.authorInput.current
    const urlInput = this.urlInput.current

    if (!titleInput.validity.valid) {
      this._setFieldAsInvalid(titleInput)
    }

    if (!authorInput.validity.valid) {
      this._setFieldAsInvalid(authorInput)
    }

    if (urlInput.value !== '' && !urlInput.validity.valid) {
      this._setFieldAsInvalid(urlInput)
    }
  }

  _handleSubmit(event) {
    event.preventDefault()

    const book = {
      title: this.titleInput.current.value,
      author: this.authorInput.current.value,
      url: this._bookURL(),
      status: this.statusInput.current.value
    }

    this.props.onSubmit(book)
  }

  _bookURL() {
    const urlInput = this.urlInput.current.value

    if (urlInput.match(Form.GoodreadsURL)) {
      return urlInput
    } else {
      return ''
    }
  }

  _removeValidationErrorsStyling() {
    const titleInput = this.titleInput.current
    const authorInput = this.authorInput.current
    const urlInput = this.urlInput.current

    const fields = [titleInput, authorInput, urlInput]

    fields.forEach(field => {
      if (field.value === '') {
        field.classList.remove('is-danger')
      }
    })
  }
}

export default Form
