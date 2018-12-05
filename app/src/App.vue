<template>
  <div class="app">
    <header>
      <nav>
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/dogs"> Dogs </RouterLink>
      </nav>
    </header>

    <main> 
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
header {
  height: 75px;
  background: lightgray; 
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header img {
  height: 100%;
}
nav a {
  text-decoration: none;
  color: black;
  margin: 3px;
  padding: 3px;
  border: 1px solid black;
}
main {
  padding: 8px;
}
</style>
