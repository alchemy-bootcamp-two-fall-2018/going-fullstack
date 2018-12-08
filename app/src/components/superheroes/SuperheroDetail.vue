<template>
  <section v-if="superhero">
    <h2>{{superhero.name}}</h2>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      superhero: null
    };
  },
  created() {
    api.getHero(this.$route.params.id)
      .then(superhero => {
        this.superhero = superhero;
      });
  }
};
</script>

<style>

</style>
