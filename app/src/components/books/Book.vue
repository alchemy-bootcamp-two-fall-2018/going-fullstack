<template>
  <li>
    <RouterLink :to="`/books/${book.id}`">
      {{book.title}}
    </RouterLink>

    <GenreDisplay :genreId="genre.genreId" />
  </li>
</template>

<script>
import GenreDisplay from '../genres/GenreDisplay';

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
