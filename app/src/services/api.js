
export default {
  
  getHeroes() {
    return fetch('/api/hero')
      .then(response => response.json());      
  },

  getHero(id) {
    return fetch(`/api/hero/${id}`)
      .then(response => response.json());
  },

  addHero(hero) {
    return fetch('/api/hero', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hero)
    })
      .then(response => response.json());
  },

  getGroups() {
    return fetch('/api/groups')
      .then(response => response.json());
  }
};