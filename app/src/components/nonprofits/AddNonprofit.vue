<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <label>Name:</label>
      <input v-model="nonprofit.name" require>
    </p>
    <p>
      <label>Category:</label>
      <input v-model="nonprofit.category">
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
        v-model="nonprofit.metropolitan" 
        required
      >
        <option value="-1" disabled>Select A Response</option>
        <option v-for="metropolitan in metropolitans"
          :key="metropolitan.id"
          :value="metropolitan.id"
        >
          {{metropolitan.name}}
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
    category: '',
    city: '',
    description: '',
    employees: 0,
    metropolitans: true
  };
}

export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      nonprofit: initNonprofit(),
      metropolitans: null
    };
  },
  created() {
    api.getMetropolitans()
      .then(metropolitans => {
        this.metropolitans = metropolitans;
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

<style scoped>

label {
  display: block;
}

input, select {
  width: 150px;
  font-size: 1.05em;
}
</style>
