<template>
  <ul v-if="campgrounds">
    <li v-for="campground in campgrounds" :key="campground.id">
      <RouterLink :to="`/campgrounds/${campground.id}`">{{campground.name}}</RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    campgrounds: null
  },
};
</script>

<style>

</style>
