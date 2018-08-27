import React, { Component } from 'react'

class StatusButton extends Component {
  render() {
    return (
      <button className={this.currentStatus()}>
        {this.props.status}
      </button>
    )
  }

  currentStatus() {
    let status = this.props.status === 'Read' ? 'is-success' : 'is-warning'

    return `button ${status}`
  }
}

export default StatusButton
