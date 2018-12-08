<template>
  <li>
    <RouterLink :to="`/dogs/${dog.id}`">{{dog.name}}</RouterLink>
     <DogDisplay :trackId="dog.sizeId" />
  </li>
</template>

<script>
import DogDisplay from '../dogSizes/DogDisplay'; 
export default {
  props: {
    dog: null
  },
  components: {
    DogDisplay
  }
};
</script>

<style>

</style>
