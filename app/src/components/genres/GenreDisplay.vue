<template>
  <span v-if="genre">
    {{genre.genre}}
  </span>
</template>

<script>
import api from '../../services/api';

export default {
  props: {
    genreId: Number
  },
  data() {
    return {
      genre: null
    };
  },
  created() {
    api.getGenres()
      .then(genres => {
        this.genre = genres.find(genre => genre.id === this.genreId);
      });
  }
};
</script>

<style>

</style>
