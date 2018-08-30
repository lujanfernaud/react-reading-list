import React, { Component } from 'react'
import Form from './Form'

class Modal extends Component {
  render() {
    return (
      <div className={this._style()}>
        <div className='modal__backdrop' onClick={this.props.onClick} />
        <div className='modal__content'>

          <span className='close' onClick={this.props.onClick}>
            &times;
          </span>

          <Form
            modalActive={this.props.active}
            onSubmit={this.props.onSubmit}
          />

        </div>
      </div>
    )
  }

  // private

  _style() {
    const active = this.props.active
    let style = 'modal'

    if (active) { style += ' display-flex' }

    return style
  }
}

export default Modal
