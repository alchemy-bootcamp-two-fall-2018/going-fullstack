<template>
  <form @submit.prevent="handleSubmit">
    <p class="add-title">Add your favorite singer:</p>
      <span>
        Name: 
          <input v-model="singer.name" require>
      </span>
      <span>
        Genre: 
          <select v-if="genres"
            v-model="singer.genre_id"
            required
          >
            <option value="-1" disabled>Select a Genre</option>
            <option v-for="genre in genres"
              :key="genre.id"
              :value="genre.id"
            >
            {{genre.name}}
            </option>
            </select>
      </span>
      <span>
        Age: 
          <input type=number  v-model="singer.age">
      </span>
      <span>
        Summary: 
        <input v-model="singer.summary">
      </span>
    <button>Add</button>
  </form>
</template>

<script>
import api from '../../services/api';

function initSinger() {
  return {
    name: '',
    genre: '',
    age: null,
    summary: '',
    genre_id: -1
  };
}

export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      singer: initSinger(),
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
      this.onAdd(this.singer)
        .then(() => {
          this.singer = initSinger();
        });
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow');

  form {
    margin-top: 30px;
    background: lightgoldenrodyellow;
    padding: 0px 15px 15px 15px;
    border: 2px solid darkgoldenrod;
    width: 850px;
    font-family: 'PT Sans Narrow', sans-serif;
  }

  span {
    margin: 10px;
  }

  .add-title {
    font-size: 1.2em;
    font-weight: 600;
  }
</style>
