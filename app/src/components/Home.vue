<template>
  <section>
    <h2>Amazing Islands!</h2>
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRfhr0VLOBBegra90OOeRUfE3MVW-QXTkJSIpB3-KcQMny2yPK" alt="Fiji">
      <br />
      <RouterLink to="islands">Islands</RouterLink>
    </div>
  </section>
</template>

<style scoped>
  h2 {
    text-align: center;
    padding-top: 10px;
    color: rgb(243, 221, 23);
  }
  div {
    text-align: center;
    margin: 0 auto;
  }
  img {
    width: 40%;
    box-shadow: 2px 2px 2px black;
  }
</style>