<template>
  <form @submit.prevent="handleSubmit">
    <fieldset>
      <label>
        Synth name: <input v-focus v-model="synth.name" required>
      </label>
      <br>
      <label>
        Image url: <input v-model="synth.image" required>
      </label>
      <br>
      <label>
        Polyphonic?
          Yes:<input type="radio" name="poly" v-model="synth.polyphonic" v-bind:value="true" required>
          No:<input type="radio" name="poly" v-model="synth.polyphonic" v-bind:value="false">
      </label>
      <br>
      <label>
        Date produced: 
        <input type="number" 
          v-model.number="synth.year" min="1950" max="2020"
          onKeyUp="if(this.value.length === 4) return false;" 
          required
        >
      </label>
      <br>
      <label>
        Manufacturer:
        <select v-if="synth" v-model="synth.manufacturerId" required>
          <option value="-1" disabled>Select a brand</option>
          <option v-for="manufacturer in manufacturers" 
            :key="manufacturer.id" 
            :value="manufacturer.id"
          >
            {{manufacturer.name}}
          </option>
        </select>
      </label>
      <p>
        <button>{{label || 'Add'}}</button>
      </p>
    </fieldset>
  </form>
</template>

<script>
import api from '../../services/api';

function initSynth() {
  return {
    name: '',
    image: '',
    polyphonic: '',
    year: '',
    manufacturerId: ''
  };
}
export default {
  props: {
    onEdit: Function,
    label: String
  },
  data() {
    return {
      synth: initSynth(),
      manufacturers: null
    };
  },
  created() {
    api.getManufacturers()
      .then(manufacturers => {
        this.manufacturers = manufacturers;
      });
  },
  methods: {
    handleSubmit() {
      this.onEdit(this.synth)
        .then(() => {
          this.synth = initSynth();
        });
    }
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
}
h4 {
  margin: 0;
}
button {
  background-color: cyan;
  border-radius: 8px;
  margin: 5px 5px 0px 0px;
}
button:hover {
  background-color: violet;
}
select {
  background: white;
}
label {
  margin-right: 10px;
}
fieldset {
  border: 2px solid transparent;
}
</style>
