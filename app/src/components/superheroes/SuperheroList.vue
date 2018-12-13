<template>
  <ul v-if="superheroes">
    <li v-for="superhero in superheroes" :key="superhero.id">
      <RouterLink :to="`/superheroes/${superhero.id}`">{{superhero.name}}</RouterLink>
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
