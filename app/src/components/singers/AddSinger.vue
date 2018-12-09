<template>
  <section>
    <button @click="show = true">Add a Singer</button>
    <Modal v-if="show" :onClose="() => show = false">
      <SingerForm :onSubmit="handleAdd"/>
      </Modal>
  </section>
</template>

<script>
import SingerForm from './SingerForm';
import Modal from '../shared/Modal';

export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      show: false
    };
  },
  components: {
    SingerForm,
    Modal
  },
  methods: {
    handleAdd(singer) {
      return this.onAdd(singer)
        .then(() => this.show = false);
      }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow');


</style>
