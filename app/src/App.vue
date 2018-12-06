<template>
  <div class="app">
    <header>
      <nav>
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/islands"> Islands </RouterLink>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  background: lightseagreen;
  display: flex;
  align-content: center;
  padding: 10px;
}

img {
  width: 50%;
  height: auto;
}
main {
  margin: 10px;
  padding: 10px;
}
</style>
