<template>
  <ul v-if="synths">
    <Synth v-for="synth in synths"
      :key="synth.id"
      :synth="synth"/>
  </ul>
</template>

<script>
import Synth from './Synth';

export default {
  props: {
    synths: null
  },
  components: {
    Synth
  }
};
</script>

<style>
ul {
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
