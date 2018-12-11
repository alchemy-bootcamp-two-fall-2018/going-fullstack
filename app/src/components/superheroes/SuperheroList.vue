<template>
  <ul v-if="superheroes">
    <li v-for="superhero in superheroes" :key="superhero.name">
      <RouterLink :to="`/superheroes/${superhero.name}`">{{superhero.name}}</RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    superheroes: null
  }
};
</script>

<style>

</style>
