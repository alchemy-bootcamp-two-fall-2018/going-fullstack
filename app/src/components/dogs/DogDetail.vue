<template>
  <section v-if="dog">
  <h2> {{dog.name}} </h2>
  <p>
    {{dog.name}} is a type of {{dog.breed}}.
  </p> 
  <p> 
    {{dog.name}} is {{dog.size}} that weighs {{dog.weight}} lbs.
  </p>
  <p>
   It is {{dog.isadopted}} that {{dog.name}} was adopted into a great family! 
  </p> 
  <EditDog 
    :dog="dog"
    :onEdit="handleEdit"/>
  <button @click="handleDelete"> REMOVE </button>
  </section> 
</template>

<script>
import api from '../../services/api'; 
import EditDog from './EditDogs'; 


export default {
  data() {
    return {
      dog: null
    };
  }, 
  components: {
    EditDog
  },
  created() {
    api.getDog(this.$route.params.id)
      .then(dog => {
        this.dog = dog; 
      });
  },
  methods: {
    handleDelete() {
      api.deleteDog(this.dog.id)
        .then(() => {
          this.$router.push('/dog'); 
        });
    },
    handleEdit(dog) {
      return api.updateDog(dog)
        .then(() => this.show = false);
    }
  }
}; 
</script>

<style scoped>
h2 {
  text-decoration: underline black;
  text-align: left; 
}

</style>

