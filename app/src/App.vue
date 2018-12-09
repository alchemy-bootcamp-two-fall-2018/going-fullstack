<template>
  <div class="app">
    <header>
      <div class="logo">
        <h1><RouterLink to="/">SINGERS</RouterLink></h1>
      </div>
      <div class="menu">
        <ul class="nav">
          <li><RouterLink to="/singers">Singers List</RouterLink></li>
          <li><RouterLink to="/genres">Genre Admin</RouterLink></li>
        </ul>
      </div>
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
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow');

body {
  font-family: 'PT Sans Narrow', sans-serif;
  margin: 0;
  padding: 0;
  background: #d5dfe5;
}

header {
  display: flex;
  justify-content: space-between;
  background: #567568;
  margin: 0;
  padding: 10px;
  height: 50px;
}

header a {
  color: #d5dfe5;
  text-decoration: none;
}

header a:hover {
  color: #d6ac57;
}

h1 {
  margin: 0;
  padding: 0;
}


main {
  background: #d5dfe5;
}

.app {
  margin: 0;
}

.nav {
  list-style-type: none;
  padding: 0;
  margin: 0;
}





</style>
