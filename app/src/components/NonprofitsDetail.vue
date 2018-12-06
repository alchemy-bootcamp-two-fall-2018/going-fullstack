<template>
  <section v-if="nonprofit">
    <h2>{{nonprofit.name}}</h2>
    <p>
      Category: {{nonprofit.category}}
    </p>
    <p>
      City: {{nonprofit.city}}
    </p>
    <p>
      Details: {{nonprofit.details}}
    </p>
    <p>
      Number of Employees: {{nonprofit.employees}}
    </p>
    <p>
      In the PDX Metro area? {{nonprofit.metropolitan}}
    </p>
  </section>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      nonprofit: null
    };
  },
  created() {
    api.getNonprofit(this.$route.params.id)
      .then(nonprofit => {
        this.nonprofit = nonprofit;
      });
  }
};
</script>

<style scoped>

</style>
