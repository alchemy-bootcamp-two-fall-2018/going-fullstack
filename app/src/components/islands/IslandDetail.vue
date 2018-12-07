<template>
  <section v-if="island">
    <div id="detail">
      <h2>{{island.name}}</h2>
      <img v-bind:src="island.iamge"/>
      <p>Location: {{island.loca}} </p>
      <p>isAmazing: {{island.isAmazing}} </p>
      <p>inhabited: {{island.inhabited}} </p>
    </div>
  </section>    
</template>

<script>
import islandsApi from '../../islandsApi';
export default {
  data() 
    return {
      island: null
    };
};
  // not recognizing command created
  created() {
    api.getIsland(this.$route.params.id)
      .then(island => {
        this.island = island;
      });
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
