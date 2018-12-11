<template>
  <div id="app">
    <header>
      <img src="./assets/tent2.png">
      <nav>
        <RouterLink to="/">Home</RouterLink><br>
        <RouterLink to="/campgrounds">Campgrounds</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 20px;
}

header img {
  height: 150px;
  width: auto;
}

nav a {
  display: flex;
  justify-content: space-between;
  width: 125px;
  text-decoration: none;
  color: #2c3e50;
  border: 1px dashed rgb(41, 40, 40);
  padding: 5px;
}
</style>
