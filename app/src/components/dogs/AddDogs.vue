<template>
  <form @submit.prevent="handleSubmit"> 
    <input v-model="dog.name" required> 
    <button> Add </button>
  </form>
</template>

<script>
export default {
  props: {
    onAdd: Function
  }, 
  data() {
    return {
      dog: {
        name: ''
      }
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
