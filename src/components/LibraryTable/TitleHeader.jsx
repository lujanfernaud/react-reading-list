import React, { Component } from 'react'

import Sorter from '../../lib/sorter'
import { compareTitles } from '../../lib/sorterHelpers'

class TitleHeader extends Component {
  constructor() {
    super()
    this.handleAscClick = this._handleAscClick.bind(this)
    this.handleDescClick = this._handleDescClick.bind(this)
  }

  render() {
    return (
      <th>
        Title
        <span>&nbsp;</span>
        <a href='' onClick={this.handleAscClick}>a</a>
        <span>/</span>
        <a href='' onClick={this.handleDescClick}>z</a>
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
    const sortedBooks = sorterFunction(books, compareTitles)

    this.props.onChange(sortedBooks)
  }
}

export default TitleHeader
