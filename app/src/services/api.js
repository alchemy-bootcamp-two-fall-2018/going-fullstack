export default {
  
  getNonprofits() {
    return fetch('/api/nonprofits')
      .then(response => response.json());      
  },
  
  getNonprofit(id) {
    return fetch(`/api/nonprofits/${id}`)
      .then(response => response.json());
  },
  
  addNonprofit(nonprofit) {
    return fetch('/api/nonprofits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nonprofit)
    })
      .then(response => response.json());
  },
  
  getCategories() {
    // return fetch('./api/metropolitans')
    //   .then(response => response.json());
    return {
      edu: 'Education',
      you: 'Youth',
      dv: 'Domestic Violence',
      art: 'Arts',
      ani: 'Animals',
      env: 'Environment',
      tec: 'Technology',
      pub: 'Public Benefit'
    };
  }
};