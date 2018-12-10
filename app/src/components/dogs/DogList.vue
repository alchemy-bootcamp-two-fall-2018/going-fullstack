<template>
  <ul style="list-style-type: none;" class="grid-container" v-if="dogs">
    <Dog v-for="dog in sortedDogs"
    :key="dog.id"
    :dog="dog"/>
  </ul>
</template>

<script>
import Dog from './Dog';

export default {
  props: {
    dogs: null
  },
  components: {
    Dog
  },
  computed: {
    sortedDogs() {
      return this.dogs.slice().sort((a, b) => {
        if(a.weight === b.weight) {
          if(a.name > b.name) return 1;
          if(a.name > b.name) return -1;
          return 0;
        }
        if(a.weight > b.weight) return -1;
        return 0;
      });
    }
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 0;
  padding: 0;
  grid-gap: 20px; 
}
</style>
