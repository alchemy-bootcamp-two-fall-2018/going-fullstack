<template>
  <section>
    <button @click="show = true">Add a New Animal</button>
    <Modal v-if="show" v-bind:onClose="() => show = false">
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

</style>