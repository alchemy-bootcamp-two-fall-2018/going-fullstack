<template>
  <ul v-if="islands">
    <li v-for="island in islands" :key="island.id">
      <RouterLink :to="`/islands/${island.id}`"><h3 class="info">{{island.name}}</h3></RouterLink>
      <img v-bind:src="island.image"/>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    islands: null
  }
};
</script>

<style scoped>
a {
    color: rgb(214, 115, 22);
    text: black;
  }
  h3:hover {
    background: rgb(231, 235, 12);
    color: rgb(58, 190, 241);
  }
  li {
    list-style: none;
    position: relative;
    width: 350px;
    height: 350px;
    border: 2px solid black;
    text-align: center;
    margin: 20px;
  }
  
  h3 {
    text-align: center;
    z-index: 1;
    margin: 0px;
    font-size: 1.4em;
  }
  .info {
    background: rgba(255, 255, 255, 0.8);
    margin-top: 0px;
    padding: 10px;
    border-bottom: 2px solid black;
  }
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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
</style>
