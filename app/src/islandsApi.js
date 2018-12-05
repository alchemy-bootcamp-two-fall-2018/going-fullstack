export default {
  getIslands() {
    return fetch('/api/islands')
      .then(response => response.json());
  }, 
  addIslands(island) {
    console.log(island); 
    return fetch('/api/islands', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(island)
    })
      .then(response => response.json());
  }
};
