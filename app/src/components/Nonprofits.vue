<template>
  <section class="nonprofits">
    <h2>Nonprofits</h2>
    <AddNonprofit :onAdd="handleAdd"/>
    <NonprofitsList :nonprofits="nonprofits"/>
  </section>
</template>

<script>
import api from '../services/api';
import AddNonprofit from './AddNonprofit.vue';
import NonprofitsList from './NonprofitsList.vue';

export default {
  data() {
    return {
      nonprofits: null,
      error: null
    };
  },
  components: {
    AddNonprofit,
    NonprofitList
  },
  created() {
    api.getNonprofits()
      .then(nonprofits => {
        this.nonprofits = nonprofits;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(nonprofit) {
      return api.addNonprofit(student)
        .then(saved => {
          this.nonprofits.push(saved);
        });
    }
  }
  
};
</script>

<style scoped>

</style>
