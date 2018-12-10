<template>
  <span>
    <button @click="show = true">  ✎ Edit </button>
    <Modal v-if="show" :onClose="() => show = false">
      <DogForm 
        :onSubmit="handleEdit"
        :dogToEdit="dog"
        label="Update"
      />
    </Modal>
  </span>
</template>

<script>
import DogForm from './DogForm';
import Modal from '../shared/Modal';

export default {
  props: {
    onEdit: Function,
    dog: Object
  },
  data() {
    return {
      show: false
    };
  },
  components: {
    DogForm,
    Modal
  },
  methods: {
    handleEdit(dog) {
      return this.onEdit(dog)
        .then(() => this.show = false); 
    }
  }
};
</script>

<style>

</style>
