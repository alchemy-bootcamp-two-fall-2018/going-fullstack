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
  
    getSingers() {
      return fetch('/api/singers')
        .then(response => response.json());      
    },

    getSinger(id) {
      return fetch(`/api/singers/${id}`)
        .then(response => response.json());
    },
  
    addSinger(singer) {
      return fetch('/api/singers', getOptions('POST', singer))
        .then(response => response.json());
    },

    updateSinger(singer) {
      return fetch(
        `/api/singers/${singer.id}`, 
        getOptions('PUT', singer)
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

    deleteSinger(id) {
      return fetch(`/api/singers/${id}`, {
        method: 'DELETE'
      })
      .then(response => response.json());
    },

    addGenre(genre) {
      return fetch('/api/genres', getOptions('POST', genre))
        .then(response => response.json())
        .then(saved => {
          genres.push(saved);
          genres.sort((a, b) => {
            if(a.name > b.name) return 1;
            if(a.name < b.name) return -1;
            return 0;
          });
        });
    }

  };

