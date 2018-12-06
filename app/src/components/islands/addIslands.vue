<template>
  <form @submit.prevent="handleSubmit">
    <label>
      <input v-model="island.name" required>
    </label>

    <label>
      <input v-model="island.loc" required>
    </label>

    <button>Add</button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      island: {}
    };
  },
  props: {
    onAdd: Function
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.island)
      .then(() => {
        this.island = { name: ''};
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
    margin-bottom: 10px;
  }

</style>