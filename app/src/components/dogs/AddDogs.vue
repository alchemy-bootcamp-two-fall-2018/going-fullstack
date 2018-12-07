<template>
  <form @submit.prevent="handleSubmit">
    <label> Name </label> 
    <input v-model="dog.name" required>
    <label> Breed </label>
    <input v-model="dog.breed" required> 
    <label> Weight </label>
    <input v-model="dog.weight" required> 
    <label> Is Adopted? </label>
    <input type="radio" v-model="dog.isAdopted" v-bind:value="true" required>
    <input type="radio" v-model="dog.isAdopted" v-bind:value="false">
    <button> Add </button>
  </form>
</template>

<script>
function initDog() {
  return {
    name: '',
    breed: '',
    weight: '',
    isAdopted: '',
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
          this.dog = initDog();
        });
    }
  }

}; 
</script>

<style>

</style>
