<template>
  <ul v-if="nonprofits">
    <!--<Nonprofit v-for="nonprofit in sortedNonprofits" 
      :key="nonprofit.id"
      :nonprofit="nonprofit"/>-->
  <li v-for="nonprofit in nonprofits" :key="nonprofit.id">
    <RouterLink :to="`/nonprofits/${nonprofit.id}`">{{nonprofit.name}}</RouterLink>
  </li>
  </ul>
</template>

<script>
//import Nonprofit from './Nonprofit';

export default {
  props: {
    nonprofits: null
  }
  // components: {
  //   Nonprofit
  // },
  // computed: {
  //   sortedNonprofits() {
  //     return this.nonprofits.slice().sort((a, b) => {
  //       if(a.name > b.name) return 1;
  //       if(a.name < b.name) return -1; {
  //         return 0;
  //       }
  //     });
  //   }
  // },
};
</script>

<style lang="postcss" scoped>

</style>
