let ratings = null;

export default {
  getIslands() {
    return fetch('/api/islands')
      .then(response => response.json());
  },  
  getIsland(id) {
    return fetch(`/api/islands/${id}`)
      .then(response => response.json());
  },
  addIsland(island) {
    return fetch('/api/islands', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(island)
    })
      .then(response => response.json());
  },

  deleteIsland(id) {
    return fetch(`/api/islands/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json());
  },
  updateIsland(island) {
    return fetch(`/api/islands/${island.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(island)
    })
      .then(response => response.json());
  },

  getRatings() {
    if(ratings) {
      return Promise.resolve(ratings);
    }
    else {
      return fetch('/api/ratings')
        .then(response => response.json())
        .then(fetchedRatings => {
          ratings = fetchedRatings;
        });
    }
  }
};