<template>
  <section class="home-page">
    <h2>Welcome to The Database</h2>
    <p class="singers-link"><RouterLink to="/singers">Take a look at the singers ▶</RouterLink></p>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow');

.home-page {
  color: #567568;
  padding: 20px;
}

.home-page a {
  text-decoration: none;
  color: #4a314d;
}

.home-page a:hover {
  color: #d6ac57;
}



</style>