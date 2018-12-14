<template>
  <div id="app">
    <header>
      <nav>
        <span><RouterLink to="/">Home</RouterLink></span>
        <span><RouterLink to="/characters">Characters</RouterLink></span>
      </nav>
    </header>

    <main>
      <RouterView></RouterView>
    </main>  
  </div>
</template>

<script>
export default {
    name: 'app',
    components: {

    }
};
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
nav {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}
span :hover {
  background: rgba(170, 170, 170, 0.452);
  padding: 5px;
  font-size: 1.10em;
}
</style>
