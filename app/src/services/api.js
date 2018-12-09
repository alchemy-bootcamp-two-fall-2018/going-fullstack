let manufacturers = null;

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
    return fetch('/api/synths', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(synth)
    })
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
  }
};