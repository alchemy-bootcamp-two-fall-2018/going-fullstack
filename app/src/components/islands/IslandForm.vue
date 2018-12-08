<template>
  <form @submit.prevent="onSubmit(island)">
    <p>
      <label>Name:</label> 
      <input v-model="island.name" require>
    </p>
    <p>
      <label>Location:</label>
      <input v-model="island.loca" require>
    </p>
    <p>
      <label>Image:</label>
      <input v-model="animal.image">
    </p>
    <p>
      <label>isAmazing (T/F):</label>
      <select v-model="island.isAmazing">
        <option value="" disabled>Select</option>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
    </p>
    <p>
    <label>Rating:</label>
      <select v-if="ratings" 
        v-model="animal.ratingId"
        required
      >
        <option value="-1" disabled>Select a Rating</option>
        <option v-for="rating in ratings"
          v-bind:key="rating.id"
          v-bind:value="rating.id"
        >
          {{rating.name}} ({{rating.shortName}})
        </option>
      </select>
    </p>
    <button>{{label || 'Add'}}</button>
  </form>
</template>

<script>
import api from '../../api';

function initIsland() {
  return {
    name: '',
    loca: '',
    image: '',
    isAmazing: '',
    ratingId: -1,
  };
}
function copyIsland(island) {
  return {
    id: island.id,
    name: island.name,
    loca: island.loca,
    image: island.image,
    isAmazing: island.isAmazing,
    ratingId: island.ratingId
  };
}
export default {
  props: {
    onSubmit: Function,
    label: String,
    islandToEdit: Object
  },
  data() {
    return {
      island: this.islandToEdit ? copyIsland(this.islandToEdit) : initIsland(),
      ratings: null
    };
  },
  created() {
    api.getIslands()
      .then(islands => {
        this.islands = islands;
      });
  }
};

</script>

<style scoped>
.form {
    text-align: center;
    border: 5px solid black;
    background: rgb(199, 202, 161);
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
</style>