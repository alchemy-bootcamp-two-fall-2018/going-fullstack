<template>
  <section>
    <h2> Dog Sizes Admin </h2>
    <ul>
      <li v-for="size in sizes"
      :key="size.id">
      {{size.shortName}}
      </li>
    </ul>
    <form @submit.prevent="handleAdd">
      <input id="size-input" v-model="sizeName">
      <button id="add-size"> Add </button>
    </form>
  </section>
</template>

<script>
import api from '../../services/api'; 
export default {
  data() {
    return {
      sizes: null,
      sizeName: ''
    };
  },
  created() {
    api.getSizes() 
      .then(sizes => {
        this.sizes = sizes;
      });
  }, 
  methods: {
    handleAdd() {
      api.addSizes ({ name: this.sizeName })
        .then(() => {
          this.sizeName = '';
        });
    }
  }
};
</script>

<style scoped>
 ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  margin: 0;
  padding: 0;
  grid-gap: 20px; 
  list-style-type: none; 
}
li {
  display: block;
  border: 1px solid black;
  justify-content: center;
  align-items:center;
  height: 200px; 
  background-color: lightgrey;
  width:100%;
  text-align: center;
}
li:hover {
  box-shadow: 5px 5px 5px black; ; 
  color:white;
  background:lightblue;
   -webkit-text-stroke: 1px black;
}
#add-size {
  margin-left: 5px;
  margin-top: 20px;
  padding: 10px 10px 10px 10px;
  font-size: 15pt;
}
#size-input {
  margin-left: 35%;
  padding: 15px 10px 10px 10px;
}
</style>
