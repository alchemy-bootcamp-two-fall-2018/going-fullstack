let ratings = null;

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
  getIslands() {
    return fetch('/api/islands')
      .then(response => response.json());
  },  
  getIsland(id) {
    return fetch(`/api/islands/${id}`)
      .then(response => response.json());
  },
  addIsland(island) {
    return fetch('/api/islands', getOptions('POST', island))
      .then(response => response.json());
  },

  deleteIsland(id) {
    return fetch(`/api/islands/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json());
  },
  updateIsland(island) {
    return fetch(`/api/islands/${island.id}`, 
      getOptions('PUT', island)
    )
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
          return ratings;
        });
    }
  }
};