class Sorter {
  static asc(books, fn) {
    return books.slice(0).sort(fn)
  }

  static desc(books, fn) {
    return books.slice(0).sort(fn).reverse()
  }
}

export default Sorter
