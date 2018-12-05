<template>
  <section class="islands">
    <h2> Islands </h2>
    <addIslands :onAdd="handleAdd"/>
  
    <ul v-if="islands">
      <li v-for="island in island"
      :key="island.id">
      {{island.name}} and place {{island.loc}}
      </li>
    </ul>
  </section>
</template>

<script>
import islandsApi from '../../islandsApi.js';
// how do we write the path when it's in same folder?
import AddIslands from '.AddIslands.vue';

export default {
    data() {
    return {
      islands: null,
    };
  },
  components: {
    AddIslands,
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

</style>
