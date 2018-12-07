<template>
  <section class="islands">
    <h2> Island List </h2>
    <AddIsland v-bind:onAdd="handleAdd"/>
    <IslandList v-bind:islands="islands"/>
  </section>
</template>

<script>
import api from '../../api.js';
import AddIsland from './AddIsland.vue';
import IslandList from './IslandList.vue';

export default {
    data() {
    return {
      islands: null,
    };
  },
  components: {
    AddIsland,
    IslandList
  },
  created() {
    api.getIslands()
      .then(islands => {
        this.islands = islands;
      });
  }, 
  methods: {
    handleAdd(island) {
      island.loca = parseInt(island.loca);
      if(island.isAmazing === 'true') {
        island.isAmazing = true;
      }
      else {
        island.isAmazing = false;
        
      }
    
      return api.addIsland(island)
        .then(saved => {
          this.islands.push(saved); 
        });
    }
  }
};
</script>

<style>
img {
  width: 80px;
}
li {
  list-style: none;
  text-align: center;
  margin: 5px;
}
</style>
