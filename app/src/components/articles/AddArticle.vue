<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <label>Title:</label>
    <input v-model="article.title" require>
    </p>

    <p>
      <label>Author:</label>
      <textarea v-model="article.author"></textarea>
    </p>

    <p>
      <label>Category:</label>
      <textarea v-model="article.category"></textarea>
    </p>

    <button>Add</button>
    
  </form>
</template>

<script>
import api from '../../services/api.js';

function initArticle() {
  return {
    title: '',
    author: '',
    category: 'us', //use category id
    views: ''
  };
}

export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      article: initArticle(),
      category: null
    };
  },
  created() {
    this.category = api.getCategories();
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.article)
        .then(() => {
          this.article = initArticle();
        });
    }
  }
};
</script>

<style scoped>
label {
  display: block;
}
input, select {
  width: 150px;
  font-size: 1.05em;
}
</style>
