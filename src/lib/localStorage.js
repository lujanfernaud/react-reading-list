class LocalStorage {
  constructor() {
    this.books = this._setBooks()
  }

  available() {
    try {
      var storage = window['localStorage']
      var x = '__storage_test__'
      storage.setItem(x, x)
      storage.removeItem(x)
      return true
    } catch (e) {
      return e instanceof DOMException && (
        // Everything except Firefox.
        e.code === 22 ||
        // Firefox.
        e.code === 1014 ||
        // Test name field too, because code might not be present
        // everything except Firefox.
        e.name === 'QuotaExceededError' ||
        // Firefox.
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // Acknowledge QuotaExceededError only if there's something already stored.
      storage.length !== 0
    }
  }

  booksNotEmpty() {
    return JSON.parse(localStorage.getItem('books')).length !== 0
  }

  updateBooks(books) {
    localStorage.setItem('books', JSON.stringify(books))
  }

  updateCurrentId(currentId) {
    localStorage.setItem('currentId', JSON.stringify(currentId))
  }

  // private

  _setBooks() {
    if (this.available() && localStorage.getItem('books')) {
      return JSON.parse(localStorage.getItem('books'))
    } else {
      return []
    }
  }
}

export default LocalStorage
