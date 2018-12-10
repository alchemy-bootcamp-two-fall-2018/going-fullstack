<template>
  <div class="app">
    <header>
      <img alt="sharing hands logo" src="./assets/hands.jpg">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/nonprofits">Nonprofits</RouterLink>
      </nav>
    </header>
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  height: 75px;
  background: lime;
  display: flex;
  align-items: center;
  justify-content: space-between;
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