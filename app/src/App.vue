<template>
  <div class="app">
    <div class="photo">
      <img src="http://www.happyvideonetwork.com/wp-content/uploads/2016/07/maxresdefault-9.jpg">
    </div>
    <header>
      <div class="logo">
        <h1><RouterLink to="/">THE SINGER DATABASE</RouterLink></h1>
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

img {
  text-align: center;
  width: 100%;
  height: 180px;
  object-fit: cover;
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  justify-content: space-between;
  background: #567568;
  margin: 0;
  padding: 20px;
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
  letter-spacing: 10px;
  margin: 0;
  padding: 0;
}

h1 a {
    color: #d6ac57;
}

h1 a:hover {
  color: #d5dfe5;
}

main {
  background: #d5dfe5;
}

.app {
  margin: 0;
  background: #567568;
}

.nav {
  list-style-type: none;
  padding: 0;
  margin: 0;
}





</style>
