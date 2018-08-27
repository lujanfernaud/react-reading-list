import React, { Component } from 'react'

class TitleHeader extends Component {
  render() {
    return (
      <th>
        Title
        <span>&nbsp;</span>
        <a href='' id='sort-title-asc'>a</a>
        <span>/</span>
        <a href='' id='sort-title-desc'>z</a>
      </th>
    )
  }
}

export default TitleHeader
