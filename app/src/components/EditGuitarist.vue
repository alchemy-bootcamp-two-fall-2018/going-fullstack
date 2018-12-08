<template>
  <section>
    <button @click="show = !show">✎ Edit</button>
    <GuitaristForm v-if="show" :onClose="() => show = false"
                  :onSubmit="handleEdit"
                  :guitaristToEdit="guitarist"
                  label="Update"/>
      
  </section>
</template>

<script>
import GuitaristForm from './GuitaristForm';
export default {
  props: {
    onEdit: Function,
    guitarist: Object
  },
  data() {
    return {
      show: false
    };
  },
  components: {
    GuitaristForm
  },
  methods: {
    handleEdit(guitarist) {
      return this.onEdit(guitarist)
        .then(() => this.show = false);
    }
  }
};
</script>

<style scoped>

</style>
