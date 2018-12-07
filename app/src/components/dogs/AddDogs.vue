<template>
  <section>
    <button @click="show =true"> Add a New Dog </button>
    <Modal v-if="show" :onClose="() => show = false">
      <DogForm :onSubmit="handleAdd"/>
    </Modal>
  </section>
</template>
<script>

import DogForm from './DogForm';
import Modal from '../shared/Modal'; 

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
    DogForm,
    Modal
  },
  methods: {
    handleAdd(dog) {
      return this.onAdd(dog)
        .then(() => this.show = false); 
    }
  }
}; 
</script>


