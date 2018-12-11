<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <label>Name:</label>
      <input v-model="nonprofit.name" require>
    </p>
    <p>
      <label>City:</label>
      <input v-model="nonprofit.city">
    </p>
    <p>
      <label>Description:</label>
      <textarea v-model="nonprofit.description"></textarea>
    </p>
    <p>
      <label>Number of Employees:</label>
      <input type="number" v-model="nonprofit.employees">
    </p>
    <!-- <p>
      <label>In PDX Metro Area?</label>
      <select v-if="metropolitans" 
        v-model="nonprofit.metropol" 
        required>
        <option value="-1" disabled>Select A Response</option>
        <option v-for="metropolitan in metropolitans"
          :key="metropolitan.id"
          :value="metropolitan.id"
        >
          {{metropolitan.name}}
        </option>
      </select>
    </p> -->
    <p>
      <label>Category:</label>
      <select v-if="categories" 
        v-model="nonprofit.category" 
        required
      >
        <option v-for="(display, key) in categories"
          :key="key"
          :value="key"
        >
          {{display}}
        </option>
      </select>
    </p>
    <button>Add</button>
  </form>
</template>

<script>
import api from '../../services/api';

function initNonprofit() {
  return {
    name: '',
    //category: '',
    city: '',
    description: '',
    employees: 0,
    metropol: true,
    category: 'edu'
  };
}

export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      nonprofit: initNonprofit(),
      categories: null
    };
  },
  created() {
    // api.getMetropolitans()
    //   .then(metropolitans => {
    //     this.metropolitans = metropolitans;
    //   });
    this.categories = api.getCategories();
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.nonprofit)
        .then(() => {
          this.nonprofit = initNonprofit();
        });
    }
  }
};
</script>

<style lang="postcss" scoped>

label {
  display: block;
}

input, select {
  width: 150px;
  font-size: 1em;
}
</style>
