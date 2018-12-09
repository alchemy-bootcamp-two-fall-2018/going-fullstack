<template>
    <section class="admin">
        <h2>Genre Administration</h2>
        <ul class="list">
            <li v-for="genre in genres"
            :key="genre.id">
            {{genre.name}}
            </li>
        </ul>

        <form @submit.prevent="handleAdd">
            <input v-model="genreName">
            <button>Add Genre</button>
        </form>
    </section>
</template>

<script>
import api from '../../services/api';

export default {
    data() {
        return {
            genres: null,
            genreName: ''
        };
    },
    created() {
      api.getGenres()
        .then(genres => {
            this.genres = genres;
        });
    },
    methods: {
      handleAdd() {
        api.addGenre({ name: this.genreName })
        .then(() => {
            this.genreName = '';
        });
      }
    }
}
</script>

<style>

.admin {
    padding: 20px;
}

h2 {
    color: #567568;
}

.list {
    list-style-type: none;
}

</style>
