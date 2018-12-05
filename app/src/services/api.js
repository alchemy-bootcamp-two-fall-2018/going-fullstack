export default {
  getDogs() {
    return fetch('/api/dogs')
      .then(response => response.json());
  }, 
  addDogs(dog) {
    console.log(dog); 
    return fetch('/api/dogs', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(dog)
    })
      .then(response => response.json());
  }
};