export default {
  getDogs() {
    return fetch('/api/dogs')
      .then(response => response.json());
  }, 
  addDogs(dog) {
    return fetch('/api/dogs', {
      method: 'POST', 
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(dog)
    })
      .then(response => response.json());
  }
};