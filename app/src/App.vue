<template>
  <div class="app">
    <header>
      <img class="logo" src="https://reverb-res.cloudinary.com/image/upload/v1463673236/Moogfest-Headere_seirtu.jpg">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/synths">Synths</RouterLink>
        <RouterLink to="/manufacturers">Brands</RouterLink>
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
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  display: flex;
  justify-content: space-evenly;
}
img.logo {
  width: 400px;
}
</style>
