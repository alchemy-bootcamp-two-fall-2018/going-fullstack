<template>
    <form @submit.prevent="onSubmit(singer)">
      <span>
        Name: 
          <input v-model="singer.name" require>
      </span>
      <span>
        Genre: 
          <select v-if="genres"
            v-model="singer.genreId"
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
    <button>{{label || 'Add'}}</button>
  </form>
</template>

<script>
import api from '../../services/api';

function initSinger() {
    return {
        name: '',
        age: 0,
        summary: '',
        genreId: -1 
    };
}

function copySinger(singer) {
    return {
        id: singer.id,
        name: singer.name,
        age: singer.age,
        summary: singer.summary,
        genreId: singer.genre_id 
    };
}

export default {
    props: {
        onSubmit: Function,
        label: String,
        singerToEdit: Object
    },
    data() {
        return {
            singer: this.singerToEdit 
                ? copySinger(this.singerToEdit) 
                : initSinger(),
      genres: null
        }
    },
    created() {
        api.getGenres()
          .then(genres => {
              this.genres = genres;
          });
    }
};
</script>

<style>


    label {
        display: block;
    }
</style>
