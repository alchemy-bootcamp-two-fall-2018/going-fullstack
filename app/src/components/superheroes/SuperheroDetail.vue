<template>
  <section v-if="hero">
    <h2>{{hero.name}}</h2>
    <p>{{hero.age}}</p>
    <p>{{hero.ability}}</p>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      hero: null
    };
  },
  created() {
    api.getHero(this.$route.params.id)
      .then(hero => {
        this.hero = hero;
      });
  }
};
</script>

<style>

</style>
