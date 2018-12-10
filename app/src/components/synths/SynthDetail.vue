<template>
  <section v-if="synth">
    <h2>{{synth.name}}</h2>
    <div id="buttons">
      <EditSynth :onEdit="handleEdit" :synth="synth"/>
      <button @click="handleDelete">Delete</button>
    </div>
    <p>
      <span v-if="synth.polyphonic === true">Polyphonic</span>
      <span v-else>Monophonic</span>
    </p>
    <p>
      Date produced: {{synth.year}}
    </p>
    <p>
      Brand: <ManufacturerDisplay :manufacturerId="synth.manufacturerId"/>
    </p>
    <p>
      <img :src="synth.image">
    </p>
    <RouterLink :to="`/synths`"><h3>Back</h3></RouterLink>
  </section>
</template>

<script>
import api from '../../services/api.js';
import ManufacturerDisplay from '../manufacturers/ManufacturerDisplay';
import EditSynth from './EditSynth';

export default {
  data() {
    return {
      synth: null
    };
  },
  components: {
    ManufacturerDisplay,
    EditSynth
  },
  created() {
    api.getSynth(this.$route.params.id)
      .then(synth => {
        this.synth = synth;
      });
  },
  methods: {
    handleDelete() {
      api.deleteSynth(this.synth.id)
        .then(() => {
          this.$router.push('/synths');
        });
    },
    handleEdit(synth) {
      return api.updateSynth(synth)
        .then(updated => this.synth = updated);
    }
  }
};
</script>

<style scoped>
img {
  width: auto;
}
div#buttons {
  display: flex;
  justify-content: space-evenly;
}
a {
  text-decoration: underline;
}
p {
  margin: 0;
}
h3 {
  font-size: 20px;
}
</style>