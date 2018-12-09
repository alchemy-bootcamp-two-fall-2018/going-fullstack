<template>
  <section>
    <button class="unicode" @click="show = true">✎ Edit</button>
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

.unicode {
  margin: 5px;
  width: 10em;
  height: 2em;
}

</style>
