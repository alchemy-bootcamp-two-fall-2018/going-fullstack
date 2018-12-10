<template>
<ul>
  <li class="dog-size">
    <span v-if="size">
      {{size.name}}
    </span>
  </li>
</ul>
</template>

<script>
import api from '../../services/api'; 

export default {
  props: {
    sizeId: Number
  }, 
  data() {
    return {
      size: null
    };
  }, 
  created() {
    api.getSizes()
      .then(sizes => {
        this.size = sizes.find(size => size.id === this.sizeId); 
      });
  }
};
</script>

<style scoped>

</style>
