<template>
  <ul v-if="emojis">
    <li v-for="emoji in emojis" :key="emoji.id">
      <RouterLink :to="`/emojis/${emoji.id}`">
        <h3>{{emoji.name}}</h3>
        <img :src="emoji.image">
      </RouterLink>
      <button class="delete" @click="onDelete(emoji)">Delete</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    emojis: Array,
    onDelete: Function
  }
};
</script>

<style>
li {
  display: inline-block;
  margin: 2%;
  padding: 2%;
  border: 1px solid rgb(117, 4, 4);
}

.delete {
  display: block;
}
</style>
