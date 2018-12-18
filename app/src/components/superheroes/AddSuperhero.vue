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
    <p>
      <label>Gang:</label>
      <select v-if="gangs" 
        v-model="superhero.gangId" 
        required
      >
        <option value="-1" disabled>Select a Gang</option>
        <option v-for="gang in gangs"
          :key="gang.id"
          :value="gang.id"
        >
          {{gang.name}} ({{gang.shortName}})
        </option>
      </select>
    </p>
    <button>Add</button>
  </form>
</template>

<script>
import api from '../../services/api';

function initSuperhero() {
  return {
    name: '',
    age: '',
    ability: '',
    gangId: -1,
  };
}

export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      superhero: initSuperhero(),
      gangs: null
    };
  },
  created() {
    api.getGangs() 
      .then(gangs => {
        this.gangs = gangs;
      });
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