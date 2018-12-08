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

// Likely problems with these functions
function initSinger() {
    return {
        name: '',
        age: null,
        summary: '',
        genreId: -1 //var name correct?
    };
}

function copySinger(singer) {
    return {
        id: singer.id,
        name: singer.name,
        summary: singer.summary,
        genreId: singer.genreId //var names correct?
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
