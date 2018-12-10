let manufacturers = null;

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
  getSynths() {
    return fetch('/api/synths')
      .then(response => response.json());
  },
  getSynth(id) {
    return fetch(`/api/synths/${id}`)
      .then(response => response.json());
  },
  addSynth(synth) {
    return fetch('/api/synths', getOptions('POST', synth))
      .then(response => response.json());
  },
  updateSynth(synth) {
    return fetch(`/api/synths/${synth.id}`,
      getOptions('PUT', synth)
    )
      .then(response => response.json());
  },
  deleteSynth(id) {
    return fetch(`/api/synths/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json());
  },
  getManufacturers() { // Now includes caching
    if(manufacturers) {
      return Promise.resolve(manufacturers);
    }
    else {
      return fetch('/api/manufacturers')
        .then(response => response.json())
        .then(fetchedManufacturers => {
          manufacturers = fetchedManufacturers;
          return manufacturers;
        });
    }
  },
  addManufacturer(manufacturer) {
    return fetch('/api/manufacturers', getOptions('POST', manufacturer))
      .then(response => response.json())
      .then(saved => {
        manufacturers.push(saved);
        manufacturers.sort((a, b) => {
          if(a.name > b.name) return 1;
          if(b.name > a.name) return -1;
          return 0;
        });
      });
  }
};