export default {
  
    getSingers() {
      return fetch('/api/singers')
        .then(response => response.json());      
    },

    getSinger(id) {
      return fetch(`/api/singers/${id}`)
        .then(response => response.json());
    },
  
    addSinger(singer) {
      return fetch('/api/singers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(singer)
      })
        .then(response => response.json());
    },

    //WIP Delete functionality
    deleteSinger(singer) {
      return fetch('/api/singers', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(singer)
      })
    }
  };

