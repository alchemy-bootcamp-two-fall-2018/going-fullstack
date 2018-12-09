<template>
  <section>
    <h2>Brand Admin</h2>
    <ul>
      <li v-for="manufacturer in manufacturers"
        :key="manufacturer.id">
        {{manufacturer.name}}
      </li>
    </ul>
    <form @submit.prevent="handleAdd">
      <input v-model="manufacturerName">
      <button>Add</button>
    </form>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      manufacturers: null,
      manufacturerName: ''
    };
  },
  created() {
    api.getManufacturers()
      .then(manufacturers => {
        this.manufacturers = manufacturers;
      });
  },
  methods: {
    handleAdd() {
      api.addManufacturer({ name: this.manufacturerName })
        .then(() => {
          this.manufacturerName = '';
        });
    }
  }
};
</script>

<style>

</style>
