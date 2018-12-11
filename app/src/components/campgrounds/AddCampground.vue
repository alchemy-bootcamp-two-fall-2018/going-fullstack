<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <label>Name:</label>
        <input v-model="campground.name" required>
    </p>

    <p>
      <label>Forest:</label>
      <select v-if="forest" v-model="campground.forest" required>
        <option v-for="(display, key) in forest"
          :key="key"
          :value="key"
        >
        {{display}}
        </option>
      </select>
    </p>

    <p>
      <label>Number of Sites:</label>
      <input v-model="campground.sites" type="number">
    </p>

    <p>
      <label>RV Waste:</label>
      <select v-model="campground.rvwaste">
        <option value="">Select</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </p>

    <button>Add</button>
  </form>
</template>

<script>
import api from '../../services/api';

function initCampground() {
  return {
    name: '',
    forest: '',
    sites: '',
    rvwaste: ''
  };
}

export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      campground: initCampground(),
      forest: null
    };
  },
  created() {
    this.forest = api.getForest();
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.campground)
        .then(() => {
          this.campground = initCampground;
        });
    }
  }
};
</script>

<style>
button {
  margin: 10px;
}
</style>
