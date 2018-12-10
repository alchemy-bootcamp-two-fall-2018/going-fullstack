<template>
  <section v-if="nonprofit">
    <h2>{{nonprofit.name}}</h2>
    <p>
      City: {{nonprofit.city}}
    </p>
    <p>
      Details: {{nonprofit.description}}
    </p>
    <p>
      Number of Employees: {{nonprofit.employees}}
    </p>
    <p>
      In the PDX Metro area? {{nonprofit.metropol}}
    </p>
    <p>
      Category: {{nonprofit.category}}
    </p>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      nonprofit: null
    };
  },
  created() {
    console.lof('need detail for', this.$route.params.id);
    api.getNonprofit(this.$route.params.id)
      .then(nonprofit => {
        this.nonprofit = nonprofit;
      });
  }
};
</script>

<style lang="postcss" scoped>

</style>
