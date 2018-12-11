<template>
  <section>
    <h2>Superheroes</h2>
    <AddSuperhero :onAdd="handleAdd"/>
    <SuperheroList :superheroes="heroes"/>    
  </section>
</template>

<script>
import api from '../../services/api';
import AddSuperhero from './AddSuperhero';
import SuperheroList from './SuperheroList';

export default {
  data() {
    return {
      heroes: null,
      error: null
    };
  },
  components: {
    AddSuperhero,
    SuperheroList
  },
  created() {
    api.getHeroes()
      .then(heroes => {
        this.heroes = heroes;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(hero) {
      return api.addHero(hero)
        .then(saved => {
          this.heroes.push(saved);
        });
    }
  } 
};

</script>

<style>

</style>
