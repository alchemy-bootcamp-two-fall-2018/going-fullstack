<template>
  <section class="dogs">
    <h2> Dogs </h2>
    
    <AddDogs :onAdd="handleAdd"/>

    <ul v-if="dogs">
      <li v-for="dog in dogs"
      :key="dog.id">

      {{dog.name}} and their breed is {{dog.type}} and they were adopted
      into a great family!
      
      </li>
    </ul>
  </section>
</template>

<script>
import api from '../../services/api';
import AddDogs from './AddDogs';
export default {
  data() {
    return {
      dogs: null,
      error: null
    };
  },
  components: {
    AddDogs,
  },
  created() {
    this.error = null;
    api.getDogs()
      .then(dogs => {
        console.log(dogs);
        this.dogs = dogs;
      })
      .catch(err => {
        this.error = err;
      });
  }, 
  methods: {
    handleAdd(dog) {
      return api.addDogs(dog)
        .then(saved => {
          this.dogs.push(saved); 
        });
    }
  }
};
</script>

<style>

</style>
