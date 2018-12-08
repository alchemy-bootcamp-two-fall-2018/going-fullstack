<template>
  <section v-if="island">
    <div id="detail">
      <div class="header">
       <h2>{{island.name}}</h2>
       <EditIsland
        v-bind:island="island"
        v-bind:onEdit="handleEdit"/>
      </div>
      <img v-bind:src="island.iamge"/>
      <p>Location: {{island.loca}} </p>
      <p>isAmazing: {{island.isAmazing}} </p>
      <p>Rating: {{island.rating}} </p>
      <button @click="handleDelete">Delete</button>
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
components: {
  EditIsland
},
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
