<template>
  <section> 
    <RouterLink id= "dogs" to="/dogs"> View Dogs </RouterLink>
    <h2> Welcome to Dogs App! </h2>
    <img src="https://www.hondenverzekeringvergelijker.nl/wp-content/uploads/2015/12/Goedkope-hondenverzekering.jpg">
  </section>
</template>

<script>
export default {

};
</script>

<style>
img {
  height: 100%;
  margin: auto; 
}
h2 {
  text-align: center;
}
#dogs {
  text-decoration: none;
  color: black;
  margin: 3px;
  padding: 3px;
  border: 1px solid black;
}
</style>
