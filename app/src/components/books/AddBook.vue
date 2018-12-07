<template>
    <form @submit.prevent="handleSubmit">
      <p>
        <label>Title:</label>
        <input v-model="book.title" required>
      </p>
      <p>
        <label>Author:</label>
        <input v-model="book.author" required>
      </p>
      <p>
        <label>Pages:</label>
        <input v-model="book.pages" type=number required>
      </p>
      <p>
        <label>Genre:</label>
        <select v-if="genres"
          v-model="book.genreId"
          required
        >
          <option value="-1" disabled>Select a Genre</option>
          <option v-for="genre in genres"
            :key="genre.id"
            :value="genre.id"
          >
        </select>
      </p>
      <p>
        <label>Check if it was good:</label>
        <input v-model="book.good" type=checkbox>
      </p>
      <button>Add Book!</button>
    </form>
</template>

<script>
import api from '../../services/api';

function initBook() {
  return {
    title: '',
    author: '',
    pages: '',
    genre: '',
    genreId: -1,
    good: Boolean,
  };
}

export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      book: initBook(),
      genres: null
    };
  },
  created() {
    api.getGenres()
      .then(genres => {
        this.genres = genres;
      });
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.book)
        .then(() => {
          this.book = initBook();
        });
    }
  },
};
</script>

<style>

</style>
