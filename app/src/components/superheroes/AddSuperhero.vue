<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <label>Name:</label>
      <input v-model="superhero.name">
    </p>
    <p>
      <label>Age:</label>
      <input v-model="superhero.name">
    </p>
    <p>
      <label>Ability:</label>
      <input v-model="superhero.name">
    </p>
    <button>Add</button>
  </form>
</template>

<script>
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      superhero: {
        name: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.superhero)
        .then(() => {
          this.superhero = { name: '' };
        });
    }
  }
};
</script>

<style>

</style>