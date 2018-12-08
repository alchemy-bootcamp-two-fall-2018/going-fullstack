<template>
  <section>
    <button @click="show = true">Add an Island</button>
    <Modal v-if="show" v-bind:onClose="() => show = false">
      <AnimalForm v-bind:onSubmit="handleAdd"/>
    </Modal>
  </section>
</template>

<script>
import IslandForm from './IslandForm';
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
    IslandForm,
    Modal
  },
  methods: {
    handleAdd(island) {
      return this.onAdd(island)
        .then(() => this.show = false);
    }
  }
};
</script>

<style scoped>

  input {
    width: 250px;
    height: 20px;
  }
  label {
    display: flex;
    padding: 5px;
    font-size: 1.1em;
    font-weight: 500;
    margin: 10px;
  }

</style>