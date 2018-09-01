import React, { Component } from 'react'

import Sorter from '../../lib/sorter'
import { compareTitles, compareStatus } from '../../lib/sorterHelpers'

class StatusHeader extends Component {
  constructor() {
    super()
    this.handleAscClick = this._handleAscClick.bind(this)
    this.handleDescClick = this._handleDescClick.bind(this)
  }

  render() {
    return (
      <th>
        Status
        <span>&nbsp;</span>
        <a href='' onClick={this.handleAscClick}>r</a>
        <span> / </span>
        <a href='' onClick={this.handleDescClick}>n</a>
      </th>
    )
  }

  // private

  _handleAscClick(event) {
    event.preventDefault()

    this._handleClick(Sorter.asc)
  }

  _handleDescClick(event) {
    event.preventDefault()

    this._handleClick(Sorter.desc)
  }

  _handleClick(sorterFunction) {
    const books = [...this.props.books]
    const booksByTitle = sorterFunction(books, compareTitles)
    const booksByStatus = sorterFunction(booksByTitle, compareStatus)

    this.props.onChange(booksByStatus)
  }
}

export default StatusHeader
