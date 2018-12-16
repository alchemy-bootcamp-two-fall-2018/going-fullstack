<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <label>Name:</label>
      <input v-model="superhero.name">
    </p>
    <p>
      <label>Age:</label>
      <input type="number" v-model="superhero.age">
    </p>
    <p>
      <label>Ability:</label>
      <input v-model="superhero.ability">
    </p>
    <button>Add</button>
  </form>
</template>

<script>
// import api from '../../services/api';

function initSuperhero() {
  return {
    name: '',
    age: '',
    ability: ''
  };
}

export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      superhero: initSuperhero()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.superhero)
        .then(() => {
          this.superhero = initSuperhero();
        });
    }
  }
};
</script>

<style>

</style>