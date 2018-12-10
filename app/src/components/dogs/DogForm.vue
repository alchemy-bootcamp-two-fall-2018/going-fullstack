<template>
 <form @submit.prevent="onSubmit(dog)">
   <p>
    <label> Name  
      <input v-model="dog.name" required>
    </label>
   </p>
   <p>
    <label> Breed 
      <input v-model="dog.breed" required>
    </label> 
  </p>
  <p>
    <label> Weight 
      <input v-model="dog.weight" required> 
    </label>
  </p>
  <p>
    <label> Is Adopted? True
      <span>
      <input type="radio" v-model="dog.isAdopted" v-bind:value="true" required> 
      </span>
      <span>
      <input type="radio" v-model="dog.isAdopted" v-bind:value="false"> False
      </span> 
    </label>
  </p>
  <p>
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
  </p>
    <button> {{label || 'Add'}} </button>
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

function copyDog(dog) {
  return {
    id: dog.id,
    name: dog.name,
    breed: dog.breed,
    weight: dog.weight,
    isAdopted: dog.isadopted, 
    sizeId: dog.sizeId
  };
}

export default {
  props: {
    onSubmit: Function,
    label: String,
    dogToEdit: Object
  }, 
  data() {
    return {
      dog: this.dogToEdit
        ? copyDog(this.dogToEdit)
        : initDog(),
      sizes: null
    };
  },
  created() {
    api.getSizes() 
      .then(sizes => {
        this.sizes = sizes;
      });
  },
  
};
</script>

<style>
label {
  display: block; 
}
button {
  margin: 10px;
  padding: 1.5em 1.5em 1em 1.5em;
  text-align: center;
}
input {
  padding-bottom: 6px;
  padding-top: 3px;
}
</style>
