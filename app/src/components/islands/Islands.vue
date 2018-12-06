<template>
  <section>
    <h2> Islands </h2>
    <addIslands :onAdd="handleAdd"/>
  
    <ul v-if="islands">
      <li v-for="island in island"
      :key="island.id">
      <h3>{{island.name}} and place {{island.loc}}</h3>
      </li>
    </ul>
  </section>
</template>

<script>
import islandsApi from '../../islandsApi.js';
import AddIslands from './AddIslands.vue';

export default {
    data() {
    return {
      islands: null,
    };
  },
  components: {
    AddIslands
  },
  created() {
    api.getIslands()
      .then(islands => {
        this.islands = islands;
      });
  }, 
  methods: {
    handleAdd(island) {
      return api.addIslands(island)
        .then(saved => {
          this.islands.push(saved); 
        });
    }
  }
};
</script>

<style>
img {
  width: 100px;
}
li {
  list-style: none;
}

</style>
