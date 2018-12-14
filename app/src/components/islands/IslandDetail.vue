<template>
  <section v-if="island">
    <div id="detail"> 

      <div class="header">
       <h2>{{island.name}}</h2>
       <EditIsland
        v-bind:island="island"
        v-bind:onEdit="handleEdit"/>
      </div>
      <img v-bind:src="island.image"/>
      <p>Loca: {{island.loca}} </p>
      <p>isAmazing: {{island.isAmazing}} </p>
      <p>Rating: {{island.rating}} </p>
      <button @click="handleDelete">Delete</button>
    </div>
  </section>    
</template>

<script>
import api from '../../api';
import EditIsland from './EditIsland.vue';

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
    handleEdit(island) {
      return api.updateIsland(island)
        .then(updated => {
          console.log('updated island', updated);
          this.island = updated;
          this.$router.push('/islands');
        });
    },
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
    button {
    padding: 5px 5px 25px 5px;
    height: 25px;
    margin: 5px;
    font-size: 0.8em;
    border-radius: 5px;
    border: 1px solid black;
    cursor: pointer;
    margin-bottom: 20px;
  }
  button:hover {
    background: black;
    color: white;
    font-size: 0.9em;
    font-weight: 500;
  }
  span {
    font-weight: bold;
  }

</style>
