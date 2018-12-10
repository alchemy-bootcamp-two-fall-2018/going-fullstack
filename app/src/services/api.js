export default {

  getArticles() {

    return fetch('/api/articles')
      .then(response => response.json());
  },

  getArticle(id) {
    return fetch(`/api/articles/${id}`)
      .then(response => response.json());
  },

  addArticle(article) {
    return fetch('/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    })
      .then(response => response.json());
    
  },

  deleteArticle(id) {
    return fetch(`/api/articles/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json());
  },

  getCategories() {
    fetch('/api/categories')
      .then(response => response.json());
  }

};