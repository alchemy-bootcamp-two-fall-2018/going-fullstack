<template>
  <section v-if="dog">
  <h2> {{dog.name}} </h2>
  <p>
    {{dog.name}} is a type of {{dog.breed}}
  </p> 
  <p> 
    {{dog.name}} weighs {{dog.weight}} lbs
  </p>
  <p>
   It is {{dog.isadopted}} that {{dog.name}} was adopted into a great family! 
  </p> 
  </section> 
</template>

<script>
import api from '../../services/api'; 

export default {
  data() {
    return {
      dog: null
    };
  }, 
  created() {
    api.getDog(this.$route.params.id)
      .then(dog => {
        this.dog = dog; 
      });
  }
}; 
</script>

<style>

</style>

