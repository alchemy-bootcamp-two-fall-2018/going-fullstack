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

<style scoped>
li {
  border: 1px solid black;
  position: relative;
  display: flex;
  align-items:center;
  height: 200px; 
  background-color: lightgrey;
  list-style-type: none;
}
li:hover {
  box-shadow: 5px 5px 5px black; ; 
  background: lightcoral;
}
</style>
