import React, { Component } from 'react'
import LibraryHead from './LibraryTable/LibraryHead'
import LibraryBody from './LibraryTable/LibraryBody'

class LibraryTable extends Component {
  render() {
    return (
      <table className='table is-stripped is-hoverable'>
        <LibraryHead />
        <LibraryBody />
      </table>
    )
  }
}

export default LibraryTable