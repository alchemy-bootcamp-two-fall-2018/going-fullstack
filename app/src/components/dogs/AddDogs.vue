<template>
  <section>
    <button id="add-dog-button" @click="show =true"> Add a New Dog </button>
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
<style scoped >
#add-dog-button {
  margin-left: 42%;
  margin-bottom: 20px;
  padding: 10px 10px 10px 10px;
  font-size: 15pt;
}
</style>



