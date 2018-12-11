<template>
  <section v-if="book">
    <h2>Book: {{book.title}}</h2>
    <p>Author: {{book.author}}</p>
    <p>Pages: {{book.pages}}</p>
    <p>Genre: <GenreDisplay :genreId="book.genreId"/></p>
  </section>
</template>

<script>
import api from '../../services/api';
import GenreDisplay from '../genres/GenreDisplay.vue';

export default {
  data() {
    return {
      book: null
    };
  },
  components: {
    GenreDisplay
  },
  created() {
    api.getBook(this.$route.params.id)
      .then(book => {
        this.book = book;
      });
  }
};
</script>

<style>

</style>
