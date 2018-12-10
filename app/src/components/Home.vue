<template>
  <section> 
    <RouterLink id= "dogs" to="/dogs"> View Dogs </RouterLink>
    <h2> Welcome to Dogs App! </h2>
    <img class="responsive" src="https://www.hondenverzekeringvergelijker.nl/wp-content/uploads/2015/12/Goedkope-hondenverzekering.jpg">
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
  border: 5px solid grey; 
  border-radius: 15%;
  display: flex;
  justify-content: center;
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
  display: flex;
  align-items: center;
  justify-content: center;
}
#dogs:hover {
  color: black;
  margin: 3px;
  padding: 3px;
  border: 1px solid black;
  color:white;
  background:lightblue;
   -webkit-text-stroke: 1px black;
}
.responsive {
  width: 100%;
  height: auto;
}
</style>
