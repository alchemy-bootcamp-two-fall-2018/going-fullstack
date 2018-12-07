<template>
  <section v-if="island">
    <div id="detail">
      <h2>{{island.name}}</h2>
      <img v-bind:src="island.iamge"/>
      <p>Location: {{island.loca}} </p>
      <p>isAmazing: {{island.isAmazing}} </p>
      <p>rating: {{island.rating}} </p>
      <button @click="handleDelete">Delete</button>
      <button @click="handleUpdate">Edit</button>
    </div>
  </section>    
</template>

<script>
import api from '../../api';

export default {
  data() {
    return {
      island: null
    };
},
  // not recognizing command created
  created() {
    api.getIsland(this.$route.params.id)
      .then(island => {
        this.island = island;
      });
  }, 
  methods: {
    handleDelete() {
      api.deleteIsland(this.island.id)
        .then(() => {
          this.$router.push('/islands');
        });
    }
  }
};
</script>

<style scoped>
section {
    border: 2px solid black;
    text-align: center;
  }
  section img {
    max-width: 250px;
  }
  .detail {
    border: 1px solid black;
    width: 400px;
  }

</style>
