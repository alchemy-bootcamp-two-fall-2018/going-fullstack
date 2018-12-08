<template>
  <section>
    <button @click="show = true">Add New Animal</button>
    <Modal v-if="show" v-bind:onClose="() => show = false">
      <h2>Add Animal</h2>
      <AnimalForm v-bind:onSubmit="handleAdd"/>
    </Modal>
  </section>
</template>

<script>
import AnimalForm from './AnimalForm';
import Modal from '../Modal';

export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      show: false
    };
  },
  components: {
    AnimalForm,
    Modal
  },
  methods: {
    handleAdd(animal) {
      return this.onAdd(animal)
        .then(() => this.show = false);
    }
  }
};
</script>

<style scoped>
  label {
    margin: 10px;
  }

  button {
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 0.8em;
    font-family: avenir; 
    cursor: pointer;
  }

  button:hover {
    background: black;
    color: white;
    font-weight: bold;
    font-size: 1.1em;
    padding: 10px;
  }

  h2 {
    margin: none;
  }
</style>