<template>
  <section v-if="article">

    <h2>{{articles.title}}</h2>
    <p>
      By {{articles.author}}
    </p>
    <p>
      Views:{{articles.views}}
    </p>
    <p>
      Category: {{articles.category}}
    </p>
  </section>
</template>

<script>
import api from '../../services/api.js';

export default {
  data() {
    return {
      article: null
    };
  },
  created() {
    api.getArticle(this.$route.params.id)
      .then(article => {
        this.article = article;
      });
  }
  // methods: {
  //   handleDelete() {
  //     api.deleteArticle(this.article.id)
  //       .then(() => {
  //         this.$router.push('/articles');
  //       });
  //   }
  // }
};
</script>

<style scoped>

</style>
