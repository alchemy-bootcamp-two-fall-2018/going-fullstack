<template>
    <li>
      <RouterLink :to="`/synths/${synth.id}`">
        <h3 class="synth-name">{{synth.name}}</h3>
        <p>
          <img :src="synth.image">
        </p>
        <ManufacturerDisplay :manufacturerId="synth.manufacturerId" class="manufacturer"/>
      </RouterLink>
    </li>
</template>

<script>
import ManufacturerDisplay from '../manufacturers/ManufacturerDisplay';

export default {
  props: {
    synth: null
  },
  components: {
    ManufacturerDisplay
  }
};
</script>

<style scoped>
li:hover {
  outline: 1px dashed red;
}
.manufacturer:hover, .synth-name:hover {
  color: red;
}
a {
  text-decoration: none;
}
h3 {
  margin-bottom: 0;
}
img {
  width: 150px;
}
p {
  margin: 0;
}
</style>
