import React, { Component } from 'react'

class AddBookButton extends Component {
  render() {
    return (
      <button
        className='button button-lg is-primary open-modal'
        onClick={this.props.onClick}>
        Add book
      </button>
    )
  }
}

export default AddBookButton
