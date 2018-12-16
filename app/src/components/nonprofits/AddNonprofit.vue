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
    <p>
      <label>In PDX Metro Area?</label>
      <select v-if="metropolitans" 
        v-model="nonprofit.metropol" 
      >
        <option value=true>Yes</option>
        <option value=false>No</option>
      </select>
    </p>
    <p>
      <label>Category:</label>
      <select v-if="categories" 
        v-model="nonprofit.categoryId" 
        required
      >
        <option value="-1" disabled>Select a Category</option>
        <option v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{category.name}} ({{category.shortName}})
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
    city: '',
    description: '',
    employees: 0,
    metropol: true,
    category: 'edu',
    categoryId: -1,
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
    this.categories = api.getCategories();
    api.getCategories()
      .then(categories => {
        this.categories = categories;
      });
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
