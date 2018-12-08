<template>
  <span>
    <button @click="show = true">Edit</button>
    <Modal v-if="show" v-bind:onClose="() => show = false">
      <IslandForm
        v-bind:onSubmit="handleEdit"
        v-bind:islandToEdit="island"
        label="Update"
      />
    </Modal>
  </span>
</template>

<script>
import IslandForm from './IslandForm.vue';
import Modal from '../Modal.vue';
export default {
  props: {
    onEdit: Function,
    animal: Object
  },
  data() {
    return {
      show: false
    };
  },
  components: {
    IslandForm,
    Modal
  },
  methods: {
    handleEdit(island) {
      return this.onEdit(island)
        .then(() => this.show = false);
    }
  }
};
</script>

<style>
</style>