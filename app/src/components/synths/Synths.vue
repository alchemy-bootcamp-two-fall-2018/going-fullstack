<template>
  <section>
    <h2>Synths</h2>
    <AddSynth :onAdd="handleAdd"/>
    <SynthList :synths="synths"/>
  </section>
</template>

<script>
import api from '../../services/api';
import AddSynth from './AddSynth';
import SynthList from './SynthList';

export default {
  data() {
    return {
      synths: null,
      error: null
    };
  },
  components: {
    AddSynth,
    SynthList
  },
  created() {
    api.getSynths()
      .then(synths => {
        this.synths = synths;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(synth) {
      return api.addSynth(synth)
        .then(saved => {
          this.synths.push(saved);
        });
    }
  }
};
</script>

<style>

</style>
