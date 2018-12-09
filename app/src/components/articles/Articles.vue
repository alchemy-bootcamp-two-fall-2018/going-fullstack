<template>
  <section class="articles">
    <h2>Articles</h2>

    <AddArticle :onAdd="handleAdd"/>
    <ArticleList :articles="articles"/>

  </section>
</template>

<script>
import api from '../../services/api.js';
import AddArticle from './AddArticle';
import ArticleList from './ArticleList';


export default {
  data() {
    return {
      articles: null,
      error: null
    };
  },
  components: {
    AddArticle,
    ArticleList
  },
  created() {
    api.getArticles()
      .then(articles => {
        this.articles = articles;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(article) {
      return api.addArticle(article)
        .then(saved => {
          this.articles.push(saved);
        });
    }
  }
};
</script>

<style scoped>
body{
  background-color: lightblue;
}
  
</style>
