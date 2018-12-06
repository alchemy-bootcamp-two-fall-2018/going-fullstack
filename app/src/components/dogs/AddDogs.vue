<template>
  <form @submit.prevent="handleSubmit">
    <label> Name </label> 
    <input v-model="dog.name" required>
    <label> Breed </label>
    <input v-model="dog.breed" required> 
    <label> Weight </label>
    <input v-model="dog.weight" required> 
    <label> Is Adopted? </label>
    <input v-model="dog.isAdopted" required>
    <button> Add </button>
  </form>
</template>

<script>
function initDog() {
  return {
    name: '',
    breed: '',
    weight: '',
    isAdopted: true
  }; 
}

export default {
  props: {
    onAdd: Function
  }, 
  data() {
    return {
      dog: initDog(),
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.dog)
        .then(() => {
          this.dog = { name: '' };
        });
    }
  }

}; 
</script>

<style>

</style>
