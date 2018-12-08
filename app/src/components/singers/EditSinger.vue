<template>
  <section>
    <button @click="show = true">✎ Edit</button>
    <Modal v-if="show" :onClose="() => show = false">
      <SingerForm 
      :onSubmit="handleEdit"
      :singerToEdit="singer"
      label="Update"
      />
      </Modal>
  </section>
</template>

<script>
import SingerForm from './SingerForm';
import Modal from '../shared/Modal';

export default {
  props: {
    onEdit: Function,
    singer: Object
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
    handleEdit(singer) {
      return this.onEdit(singer)
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
