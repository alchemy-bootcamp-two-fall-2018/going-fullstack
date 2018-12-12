<template>
  <section v-if="article">

    <h2>{{article.title}}</h2>
    <p>
      By {{article.author}}
    </p>
    <p>
      Views:{{article.views}}
    </p>
    <p>
      Category: {{article.category}}
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
