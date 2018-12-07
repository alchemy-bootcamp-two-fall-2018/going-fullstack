<template>
  <form @submit.prevent="handleSubmit">
    <label>Name:
      <input v-model="island.name" require>
    </label>
    
    <label>Location:
      <input v-model="island.loca" require>
    </label>

    <label>Image:
      <input v-model="island.image">
    </label>

    <label>Is Amazing (T/F):
      <select v-model="island.isAmazing">
        <option value="" disabled selected >Select</option>
        <opiton value="true">True</opiton>
        <opiton value="false">False</opiton>
      </select>
    <p>
    <label>rating:</label>
      <select v-if="ratings" 
        v-model="island.ratingId" require>
        <option value="-1" disabled>Select rating</option>
        <option v-for="rating in ratings"
          v-bind:key="rating.id"
          v-bind:value="rating.id">
          {{rating.name}} ({{rating.shortName}})
        </option>
      </select>
    </p>
    </label>

    <button>Add</button>
  </form>
</template>

<script>
import islandApi from '../../api';

function initAnimal() {
  return {
    name: '',
    loca: '',
    imagel: '',
    isAmazing: '',
    ratingId: -1,
  };
}


export default {
   props: {
    onAdd: Function
   },
  data() {
    return {
      island: initIsland(),
      ratinges: null
    };
  },
  created() {
    api.getRatings()
      .then(ratings => {
        this.ratings = ratings;
      });
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.island)
        .then(() => {
          this.island = initIsland();
      });
    }
  }
};
</script>

<style scoped>
form {
    text-align: center;
    border: 5px solid black;
    background: white;
    padding: 40px;
    height: 300px;
    width: 400px;
  }
  .form-title {
    margin: 0px;
    padding-bottom: 20px;
    font-size: 2em;    
  }
  form button {
    margin: 5px;
    font-size: 1.2em;
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px;
  }
  form button:hover {
    background: rgb(190, 236, 147);
  }
  input {
    width: 250px;
    height: 20px;
  }
  label {
    display: flex;
    padding: 5px;
    font-size: 1.1em;
    font-weight: 500;
    margin: 10px;
  }

</style>