<template>
  <section>
    <button @click="show = !show">Add a New Guitarist</button>
    <GuitaristForm v-if="show" 
                :onClose="() => show = false"
                :onSubmit="handleAdd"/>
  </section>
</template>

<script>
import GuitaristForm from './GuitaristForm';

export default {
  props: {
    onAdd: Function,
    onClose: Function
  },
  data() {
    return {
      show: false
    };
  },
  components: {
    GuitaristForm,
  },
  methods: {
    handleAdd(guitarist) {
      return this.onAdd(guitarist)
        .then(() => this.show = false);
    }
  }
};
</script>

<style>
input {
  padding: .5em .6em;
  display: inline-block;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px #ddd;
  border-radius: 4px;
  vertical-align: middle;
  box-sizing: border-box;
  margin: 5px;
}
button {
  text-decoration: none;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  font-weight: bold;
  background: #6AD58B;
  transition: background 0.3s ease;
  margin-bottom: 20px;
}
button:hover {
  opacity: 1;
  background: #3ac162;
  text-decoration: none;
  color: white;
}
select {
  margin-right: 10px;
}
.alive {
  margin-left: 10px;
}
</style>