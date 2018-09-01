import React, { Component } from 'react'

import LibraryHead from './LibraryHead'
import LibraryBody from './LibraryBody'

class LibraryTable extends Component {
  render() {
    return (
      <table className='table is-stripped is-hoverable'>
        <LibraryHead books={this.props.books} onChange={this.props.onChange} />
        <LibraryBody books={this.props.books} onChange={this.props.onChange} />
      </table>
    )
  }
}

export default LibraryTable
