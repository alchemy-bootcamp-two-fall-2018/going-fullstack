<template>
  <li>
    <RouterLink :to="`/dogs/${dog.id}`">{{dog.name}}</RouterLink>
  </li>
</template>

<script>
export default {
  props: {
    dog: null
  },
};
</script>

<style>

</style>
