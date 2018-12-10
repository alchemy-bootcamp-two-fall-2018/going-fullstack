<template>
    <form @submit.prevent="onSubmit(singer)">
      <label>
        <span>Name: </span>
          <input v-model="singer.name" autofocus require >
      </label>
      <label>
        <span>Genre: </span>
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
      </label>
      <br/>
      <label>
        <span>Age: </span>
          <input type=number  v-model="singer.age">
      </label>
      <label>
        <span>Summary: </span>
        <textarea v-model="singer.summary"></textarea>
      </label>
    <button>{{label || 'Add'}}</button>
  </form>
</template>

<script>
import api from '../../services/api';

function initSinger() {
    return {
        name: '',
        age: null, //pay attention to this
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
    display: flex;
    padding: 3px;
}

label span {
    display: inline-block;
    width: 60px;
}

</style>
