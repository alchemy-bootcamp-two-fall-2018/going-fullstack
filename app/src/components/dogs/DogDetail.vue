<template>
  <section v-if="dogs">
  <h2> {{dog.name}} </h2>
  <p>
    {{dog.name}} is a type of {{dog.breed}}
  </p> 
  <p> 
    {{dog.name}} weighs {{dog.weight}} lbs
  </p>
  <p>
   {{dog.name}} was adopted into a great family! {{dog.isAdopted}}
  </p>
  </section> 
</template>

<script>
import api from '../../services/api'; 

export default {
  data() {
    return {
      dogs: null
    };
  }, 
  created() {
    api.getDogs(this.$route.params.id)
      .then(dog => {
        this.dog = dog; 
      });
  }
}; 
</script>

<style>

</style>

