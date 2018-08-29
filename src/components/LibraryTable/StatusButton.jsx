import React, { Component } from 'react'

class StatusButton extends Component {
  constructor() {
    super()
    this.handleStatus = this.handleStatus.bind(this)
  }

  render() {
    return (
      <button
        className={`button ${this.buttonStyle()}`}
        onClick={this.handleStatus}>
        {this.props.status}
      </button>
    )
  }

  buttonStyle() {
    return this.props.status === 'Read' ? 'is-success' : 'is-warning'
  }

  handleStatus() {
    const currentStatus = this.props.status
    const newStatus = currentStatus === 'Read' ? 'Not read' : 'Read'

    this.props.onClick(newStatus)
  }
}

export default StatusButton
