<template>
  <section class="detail-list" v-if="singer">
    <p class="singers-link"><RouterLink to="/singers">◀ back to the list</RouterLink></p>
    <h2>{{singer.name}}</h2>
    <p class="age">
      Age: {{singer.age}}
    </p>
    <p class="genre">
        Genre: {{singer.genre}}
    </p>
    <p class="summary">
      {{singer.summary}}
    </p>
    <p class="buttons">
     <EditSinger
      :singer="singer"
      :onEdit="handleEdit"/>
     <button class="unicode" @click=handleDelete>🗑 Delete</button>
    </p>
  </section>
</template>

<script>
import api from '../../services/api';
import EditSinger from './EditSinger';

export default {
  data() {
    return {
      singer: null
    };
  },
  components: {
    EditSinger
  },
  created() {
    api.getSinger(this.$route.params.id)
      .then(singer => {
        this.singer = singer;
      });
  },
  methods: {
    handleEdit(singer) {
      return api.updateSinger(singer)
        .then(updated => {
          this.singer = updated;
        })
    },

    handleDelete() {
      api.deleteSinger(this.singer.id)
        .then(() => {
          this.$router.push('/singers')
        })
    }
  }
};
</script>

<style lang="postcss" scoped>

h2 {
  font-size: 2em;
  color: #d6ac57;
  text-shadow: 2px 2px #3d3a09;
  margin-bottom: 0;
}



a:hover

.age {
  margin: 0;
  padding: 0;
}

.genre {
  color: #567568;
  font-size: 1.3em;
}

.summary {
  color: #4a314d;
  font-size: 1.1em;
}

.detail-list {
  padding: 20px;
}

.unicode {
  margin: 5px;
  width: 10em;
  height: 2em;
}

.singers-link a {
  color: #567568;
  text-decoration: none;
}

.singers-link a:hover {
  color: #d6ac57;
}

</style>

