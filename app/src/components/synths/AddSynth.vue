<template>
  <section>
    <button @click="show = true">Add a new synth</button>
    <Modal v-if="show" :onClose="() => show = false">
      <SynthForm :onSubmit="handleAdd"/>
    </Modal>
  </section>
</template>

<script>
import api from '../../services/api';
import SynthForm from './SynthForm';
import Modal from '../shared/Modal';

export default {
  props: {},
  data() {
    return {
      show: false
    };
  },
  components: {
    SynthForm,
    Modal
  },
  methods: {
    handleAdd(synth) {
      return api.addSynth(synth)
        .then(saved => {
          this.$router.push(`/synths/${saved.id}`);
        });
    }
  }
};
</script>