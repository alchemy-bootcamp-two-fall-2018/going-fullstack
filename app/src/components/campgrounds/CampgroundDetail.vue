<template>
  <section v-if="campground">
    <h2>{{campground.name}}</h2>
    <p>{{campground.forest}}</p>
    <p>Number of Sites: {{campground.sites}}</p>
    <p>RV Waste Available: {{campground.rvwaste}}</p>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      campground: null
    };
  },
  created() {
    api.getCampground(this.$route.params.id)
      .then(campground => {
        this.campground = campground;
      });
  }
};
</script>

<style>

</style>
