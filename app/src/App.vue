<template>
  <div class="app">
    <header>
      <img alt="Vue logo" src="./assets/logo.png">
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

<style>
header {
  height: 75px;
  background: lime;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
