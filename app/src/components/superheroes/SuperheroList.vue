<template>
  <ul class="list" v-if="superheroes">
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

.list {
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  list-style-type: none;
}
</style>
