<template>
  <form @submit.prevent="handleSubmit">
    <label>Name:
      <input v-model="island.name" required>
    </label>
    
    <label>Location:
      <input v-model="island.loca" required>
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

    <label>Inhabited (T/F):
      <select v-model="island.inhabited">
        <option value="" disabled selected >Select</option>
        <opiton value="true">True</opiton>
        <opiton value="false">False</opiton>
      </select>
    </label>

    <button>Add</button>
  </form>
</template>

<script>

export default {
   props: {
    onAdd: Function
   },
  data() {
    return {
      island: {}
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.island)
      .then(() => {
        this.island = {};
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