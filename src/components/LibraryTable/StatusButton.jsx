import React, { Component } from 'react'

class StatusButton extends Component {
  constructor() {
    super()
    this.handleStatus = this._handleStatus.bind(this)
  }

  render() {
    return (
      <button className={this._buttonStyle()} onClick={this.handleStatus}>
        {this.props.status}
      </button>
    )
  }

  // private

  _buttonStyle() {
    const status = this.props.status
    const statusStyle = status === 'Read' ? 'is-success' : 'is-warning'

    return `button ${statusStyle}`
  }

  _handleStatus() {
    const currentStatus = this.props.status
    const newStatus = currentStatus === 'Read' ? 'Not read' : 'Read'

    this.props.onClick(newStatus)
  }
}

export default StatusButton
