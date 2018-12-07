<template>
  <ul v-if="books">
    <Book v-for="book in sortedBooks"
        :key="book.id"
        :book="book"/>
  </ul>
</template>

<script>
import Book from './Book';

export default {
  props: {
    books: null
  },
  components: {
    Book 
  },
  computed: {
    sortedBooks() {
      return this.books.slice().sort((a, b) => {
        if(a.title > b.title) return 1;
        if(a.title < b.title) return -1;
      });
    }
  }
};
</script>

<style scoped>

</style>
