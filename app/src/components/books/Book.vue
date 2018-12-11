<template>
  <li>
    <RouterLink :to="`/books/${book.id}`">
      {{book.title}}
    </RouterLink>

    <GenreDisplay :genreId="book.genreId" />
  </li>
</template>

<script>
import GenreDisplay from '../genres/GenreDisplay.vue';

export default {
  props: {
    book: null
  },
  components: {
    GenreDisplay
  }
};
</script>

<style>

</style>
