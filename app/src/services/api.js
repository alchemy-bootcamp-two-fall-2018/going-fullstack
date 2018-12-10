export default {
  
  getGuitarists() {
    return fetch('/api/guitarists')
      .then(response => response.json());      
  },
  getGuitarist(id) {
    return fetch(`/api/guitarists/${id}`)
      .then(response => response.json());
  },
  
  addGuitarist(guitarist) {
    return fetch('/api/guitarists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(guitarist)
    })
      .then(response => response.json());
  },

  getGuitars() {
    return fetch('/api/guitars')
      .then(response => response.json());
  },

  deleteGuitarist(id) {
    return fetch(`/api/guitarists/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json());
  },

  updateGuitarist(guitarist) {
    return fetch(`/api/guitarists/${guitarist.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(guitarist)
    })
      .then(response => response.json());
  }
};