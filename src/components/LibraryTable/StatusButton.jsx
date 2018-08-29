import React, { Component } from 'react'

class StatusButton extends Component {
  constructor() {
    super()
    this.handleStatus = this.handleStatus.bind(this)
  }

  render() {
    return (
      <button className={this.buttonStyle()} onClick={this.handleStatus}>
        {this.props.status}
      </button>
    )
  }

  buttonStyle() {
    const status = this.props.status
    const statusStyle = status === 'Read' ? 'is-success' : 'is-warning'

    return `button ${statusStyle}`
  }

  handleStatus() {
    const currentStatus = this.props.status
    const newStatus = currentStatus === 'Read' ? 'Not read' : 'Read'

    this.props.onClick(newStatus)
  }
}

export default StatusButton
