<template>
  <div class="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/emojis">Emojis</RouterLink>
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

body {
  font-family: "Segoe UI", Candara, "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif;
  margin: 0;
  background-color: grey;
  text-align: center;
}

* {
  box-sizing: border-box;
}

header {
  height: 75px;
  background: lightsteelblue;
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

a {
  text-decoration: none;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
