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

  form {
    margin-top: 30px;
    background: lightgoldenrodyellow;
    padding: 0px 15px 15px 15px;
    border: 2px solid darkgoldenrod;
    width: 850px;
    font-family: 'PT Sans Narrow', sans-serif;
  }

  span {
    margin: 10px;
  }

  .add-title {
    font-size: 1.2em;
    font-weight: 600;
  }
</style>
