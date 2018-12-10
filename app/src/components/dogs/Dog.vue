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
ul {
  list-style-type: none; 
}
li {
  border: 1px solid black;
  align-items:center;
  height: 200px; 
  background-color: lightgrey;
  list-style-type: none;
  width:100%;
  text-align: center;
}
li:hover {
  box-shadow: 5px 5px 5px black; ; 
  background:lightblue;
}
</style>
