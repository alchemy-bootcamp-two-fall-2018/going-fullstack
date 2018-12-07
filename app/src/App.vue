<template>
  <div class="app">
    <header>
      <img alt="Vue logo" src="./assets/logo.png">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/nonprofits">Nonprofits</router-link>
      </nav>
    </header>
    <router-view></router-view>
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
