<template>
  <div class="app">
    <header>
      <h1>Welcome to the AMAZING ISLANDS app!</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/islands">Islands</RouterLink>
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
header {
  background: lightseagreen;
  color: rgb(248, 244, 9);
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 10px;
  border: black;
}
img {
  width: 100%;
  height: auto; 
}
 p, h1, h2, h3, label, a {
    font-family: avenir; 
  }
  nav a {
    text-decoration: none;
    color: black;
    margin: 5px;
    border: 4px blue;
    padding: 3px;
    background: white;
    border-radius: 5px;
  }
  nav a:hover {
    background: rgb(224, 153, 19);
    color: white;
    font-weight: bold;
  }
  h1 {
    font-size: 3em;
    margin: 5px;
  }
main {
  margin: 10px;
  padding: 10px;
}
</style>
