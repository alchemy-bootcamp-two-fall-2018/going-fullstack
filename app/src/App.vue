<template>
  <div id="app">
    <header>
      <img alt="Vue logo" src="https://vignette.wikia.nocookie.net/gameideas/images/f/f4/MVDC.jpg/revision/latest?cb=20130318194948">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/superheroes">Superheroes</RouterLink>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 500px;
}
</style>
