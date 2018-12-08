<template>
  <span>
    <button @click="show = true">✎ Edit</button>
    <Modal v-if="show" v-bind:onClose="() => show = false">
      <AnimalForm
        v-bind:onSubmit="handleEdit"
        v-bind:animalToEdit="animal"
        label="Update"
      />
    </Modal>
  </span>
</template>

<script>
import AnimalForm from './AnimalForm';
import Modal from '../Modal';
export default {
  props: {
    onEdit: Function,
    animal: Object
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
    handleEdit(animal) {
      return this.onEdit(animal)
        .then(() => this.show = false);
    }
  }
};
</script>

<style scoped>

button {
  margin-bottom: 20px;
  padding: 5px;
  font-size: 0.8em;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
}

button:hover {
  background: black;
  color: white;
  font-size: 0.9em;
  font-weight: 500;
}

</style>
