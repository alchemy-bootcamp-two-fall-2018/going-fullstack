<template>
  <span v-if="manufacturer">
    {{manufacturer.name}}
  </span>
</template>

<script>
import api from '../../services/api';

export default {
  props: {
    manufacturerId: Number
  },
  data() {
    return {
      manufacturer: null
    };
  },
  created() {
    api.getManufacturers()
      .then(manufacturers => {
        this.manufacturer = manufacturers.find(manufacturer => 
          manufacturer.id === this.manufacturerId);
      });
  }

};
</script>