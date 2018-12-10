<template>
  <section>
    <button @click="show = true"  class="edit-btn">Edit</button>
    <Modal v-if="show" :onClose="() => show = false">
      <SynthForm 
        :onSubmit="handleEdit"
        :synthToEdit="synth"
        label="Update"
      />
    </Modal>
  </section>
</template>

<script>
import SynthForm from './SynthForm';
import Modal from '../shared/Modal';

export default {
  props: {
    onEdit: Function,
    synth: Object
  },
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
    handleEdit(synth) {
      return this.onEdit(synth)
        .then(() => {
          this.show = false,
          this.$router.go();
        });
    }
  }
};
</script>

<style scoped>
.edit-btn {
  padding: 6px;
}
</style>
