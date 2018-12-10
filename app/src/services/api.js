let sizes = null;

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
  getDogs() {
    return fetch('/api/dog_picker')
      .then(response => response.json());
  }, 
  getDog(id) {
    return fetch(`/api/dog_picker/${id}`)
      .then(response => response.json()); 
  },
  addDogs(dog) {
    return fetch('/api/dog_picker', getOptions('POST', dog))
      .then(response => response.json());
  },
  deleteDog(id) {
    return fetch(`/api/dog_picker/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json());
  },
  getSizes() {
    if(sizes) {
      return Promise.resolve(sizes);
    }
    else {
      return fetch('/api/dog_size_table')
        .then(response => response.json())
        .then(fetchedSizes => {
          sizes = fetchedSizes;
          return sizes;
        });
    }
  },
  updateDog(dog) {
    return fetch(
      `/api/dog_picker/${dog.id}`,
      getOptions('PUT', dog)
    )
      .then(response => response.json());
  },
  addSizes(size) {
    return fetch('/api/dog_size_table', getOptions('POST', size))
      .then(response => response.json())
      .then(saved => {
        sizes.push(saved);
        sizes.sort((a, b) => {
          if(a.name > b.name) return 1; 
          if(a.name < b.name) return -1; 
          return 0;
        });
      });
  }
};