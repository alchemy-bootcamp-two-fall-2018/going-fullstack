<template>
  <li>
    <RouterLink :to="`/books/${book.id}`">
      {{book.title}} </RouterLink>
    by {{book.author}}.<template>
  </li>
</template>
    
<script>
export default {
  props: {
    book: null
  }
};
</script>

<style>

</style>
    