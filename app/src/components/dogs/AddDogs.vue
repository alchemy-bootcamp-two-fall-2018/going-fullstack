<template>
  <form @submit.prevent="handleSubmit">
    <label> Name  
      <input v-model="dog.name" required>
    </label>
    <label> Breed 
      <input v-model="dog.breed" required>
    </label> 
    <label> Weight 
      <input v-model="dog.weight" required> 
    </label>
    <label> Is Adopted?
      <input type="radio" v-model="dog.isAdopted" v-bind:value="true" required> True/False
      <input type="radio" v-model="dog.isAdopted" v-bind:value="false"> 
    </label>
    <label>
      <select v-if="sizes"
        v-model="dog.sizeId"
        required
      >
        <option value="-1" disabled>Select a Size </option>
        <option v-for="size in sizes"
        :key="size.id"
        :value="size.id"
      >
       {{size.shortName}}
        </option>
      </select>
    </label>
    <button> Add </button>
  </form>
</template>

<script>
import api from '../../services/api';
function initDog() {
  return {
    name: '',
    breed: '',
    weight: '',
    isAdopted: '',
    sizeId: -1
  }; 
}

export default {
  props: {
    onAdd: Function
  }, 
  data() {
    return {
      dog: initDog(),
      sizes: null
    };
  },
  created() {
    api.getSizes() 
      .then(sizes => {
        this.sizes = sizes;
      });
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
