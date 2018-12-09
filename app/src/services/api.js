let genres = null;

const getOptions = (method, data) => {
  return {
    method,
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
};

export default {
  getBooks() {
    return fetch('/api/books')
      .then(response => response.json());
  },

  getBook(id) {
    return fetch(`/api/books/${id}`)
      .then(response => response.json());
  },

  addBook(book) {
    return fetch('/api/books', getOptions('POST', book))
      .then(response => response.json());
  },

  updateBook(book) {
    return fetch(
      `/api/books/${book.id}`,
      getOptions('PUT', book)
    )
      .then(response => response.json());
  },

  getGenres() {
    if(genres) {
      return Promise.resolve(genres);
    }
    else {
      return fetch('/api/genres')
        .then(response => response.json())
        .then(fetchedGenres => {
          genres = fetchedGenres;
          return genres;
        });
    }
  },

  addGenre(genre) {
    return fetch('./api/genres', getOptions('POST', genre))
      .then(response => response.json())
      .then(saved => {
        this.getGenres.push(saved);
        this.sort((a, b) => {
          if(a.genre > b.genre) return 1;
          if(a.genre < b.genre) return -1;
          return 0;
        });
      });
  }
};


