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
    console.log('api', dog); 
    return fetch('/api/dog_picker', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(dog)
    })
      .then(response => response.json());
  }
};