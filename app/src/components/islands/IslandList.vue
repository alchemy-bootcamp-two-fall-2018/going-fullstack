<template>
  <ul v-if="islands">
    <li v-for="island in islands" :key="island.id">
      <RouterLink :to="`/islands/${island.id}`"><h3 class="info">{{islands.name}}</h3></RouterLink>
      <img v-bind:src="island.image"/>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    islands:null
  }
};
</script>

<style scoped>
li {
  list-style: none;
  position: relative;
  width: 30%;
  height: 30%;
  border: 1px rgb(170, 117, 20)
}
li img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
}
.info {
  background: rgb(192, 209, 240);
  padding: 10px;
}
ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

</style>
