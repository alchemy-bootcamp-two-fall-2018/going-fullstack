<template>
  <section>
    <h2> Dog Sizes Admin </h2>
    <ul>
      <li v-for="size in sizes"
      :key="size.id">
      {{size.shortName}}
      </li>
    </ul>
    <form @submit.prevent="handleAdd">
      <input v-model="sizeName">
      <button> Add </button>
    </form>
  </section>
</template>

<script>
import api from '../../services/api'; 
export default {
  data() {
    return {
      sizes: null,
      sizeName: ''
    };
  },
  created() {
    api.getSizes() 
      .then(sizes => {
        this.sizes = sizes;
      });
  }, 
  methods: {
    handleAdd() {
      api.addSizes ({ name: this.sizeName })
        .then(() => {
          this.sizeName = '';
        });
    }
  }
};
</script>

<style>

</style>
