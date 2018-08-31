import React, { Component } from 'react'
import TitleHeader from './TitleHeader'
import AuthorHeader from './AuthorHeader'
import StatusHeader from './StatusHeader'

class LibraryHead extends Component {
  render() {
    return (
      <thead className='table__header'>
        <tr>
          <TitleHeader
            books={this.props.books}
            onChange={this.props.onChange}
          />
          <AuthorHeader />
          <StatusHeader />
          <th />
        </tr>
      </thead>
    )
  }
}

export default LibraryHead
