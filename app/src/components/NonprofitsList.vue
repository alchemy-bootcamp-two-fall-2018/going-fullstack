<template>
  <ul v-if="nonprofits">
    <Nonprofit v-for="nonprofit in sortedNonprofits" 
      :key="nonprofit.id"
      :nonprofit="nonprofit"/>
  </ul>
</template>

<script>
import Nonprofit from './Nonprofit';

export default {
  props: {
    nonprofits: null
  },
  components: {
    Student
  },
  computed: {
    sortedNonprofits() {
      return this.nonprofits.slice().sort((a, b) => {
        if(a.name > b.name) return 1;
        if(a.name < b.name) return -1; {
        return 0;
        }
      });
    }
  },
};
</script>

<style scoped>

</style>
