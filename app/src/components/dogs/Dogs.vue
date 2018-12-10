<template>
  <section class="dogs">
    <h2> Dogs </h2>
    <AddDogs :onAdd="handleAdd"/>
    <DogList :dogs="dogs"/>
  </section>
</template>

<script>
import api from '../../services/api';
import AddDogs from './AddDogs';
import DogList from './DogList'; 
export default {
  data() {
    return {
      dogs: null,
      error: null
    };
  },
  components: {
    AddDogs,
    DogList
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
      console.log('vue', dog); 
      return api.addDogs(dog)
        .then(saved => {
          this.dogs.push(saved); 
        });
    }
  }
};
</script>

<style scoped>

</style>
