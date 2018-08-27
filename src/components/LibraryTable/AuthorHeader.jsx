import React, { Component } from 'react'

class AuthorHeader extends Component {
  render() {
    return (
      <th>
        Author
        <span>&nbsp;</span>
        <a href='' id='sort-author-asc'>a</a>
        <span>/</span>
        <a href='' id='sort-author-desc'>z</a>
      </th>
    )
  }
}

export default AuthorHeader
