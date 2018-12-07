<template>
  <ul v-if="dogs">
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
      return this.dogs.slice().sort((a,b) => {
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

<style lang="postcss" scoped>
</style>
