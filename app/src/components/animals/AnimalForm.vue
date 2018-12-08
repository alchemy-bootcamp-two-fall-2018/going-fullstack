<template>
  <form @submit.prevent="onSubmit(animal)">
    <p>
      <label>Name:</label> 
      <input v-model="animal.name" require>
    </p>
    
    <p>
      <label>Weight:</label>
      <input v-model="animal.weight" type="number" require>
    </p>

    <p>
      <label>Mammal (T/F):</label>
      <select v-model="animal.mammal">
        <option value="" disabled>Select</option>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
    </p>

    <p>
    <label>Size:</label>
      <select v-if="sizes" 
        v-model="animal.sizeId"
        required
      >
        <option value="-1" disabled>Select a Size</option>
        <option v-for="size in sizes"
          v-bind:key="size.id"
          v-bind:value="size.id"
        >
          {{size.name}} ({{size.shortName}})
        </option>
      </select>
    </p>

    <p>
      <label>Image:</label>
      <input v-model="animal.image">
    </p>

    <button>{{label || 'Add'}}</button>

  </form>
</template>

<script>
import api from '../../services/api';

function initAnimal() {
  return {
    name: '',
    weight: '',
    mammal: '',
    image: '',
    sizeId: -1,
  };
}

function copyAnimal(animal) {
  return {
    id: animal.id,
    name: animal.name,
    weight: animal.weight,
    mammal: animal.mammal,
    image: animal.image,
    sizeId: animal.sizeId
  };
}

export default {
  props: {
    onSubmit: Function,
    label: String,
    animalToEdit: Object
  },
  data() {
    return {
      animal: this.animalToEdit ? copyAnimal(this.animalToEdit) : initAnimal(),
      sizes: null
    };
  },
  created() {
    api.getSizes()
      .then(sizes => {
        this.sizes = sizes;
      });
  }
};
</script>

<style>

label {
  display: block;
}

input, select {
  width: 300px;
  font-size: 1.05em;
}

</style>


