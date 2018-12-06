<template>
  <ul v-if="nonprofits">
    <li v-for="nonprofit in nonprofits" :key="nonprofit.id">
      <RouterLink :to="`/nonprofits/${nonprofit.id}`">{{nonprofit.name}}</RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    nonprofits: null
  }
};
</script>

<style scoped>

</style>
