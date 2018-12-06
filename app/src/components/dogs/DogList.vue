<template>
  <ul v-if="dogs">
    <li v-for="dog in dogs" :key="dog.id">
      <RouterLink :to="`/dogs/${dog.id}`"> {{dog.name}} </RouterLink>
    </li>
  </ul>
</template>

<script>
import api from '../../services/api.js'; 

export default {
  props: {
    dogs: null
  }
};
</script>

<style>

</style>
