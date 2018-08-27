import React, { Component } from 'react'

class StatusHeader extends Component {
  render() {
    return (
      <th>
        Status
        <span>&nbsp;</span>
        <a href='' id='sort-read'>r</a>
        <span>/</span>
        <a href='' id='sort-not-read'>n</a>
      </th>
    )
  }
}

export default StatusHeader
