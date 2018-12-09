<template>
    <div class="list">
        <ul v-if="singers">
            <li v-for="singer in singers" :key="singer.id">
            <RouterLink :to="`/singers/${singer.id}`">
                <p class="singer-name">{{singer.name}}</p> 
            </RouterLink>
                <p class="singer-genre">{{singer.genre}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    singers: Array
  }
};
</script>

<style lang="postcss" scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow');

ul {
    padding: 0;
    margin: 0;
}

.singer-name {
    font-size: 1.5em;
    margin-bottom: 0px;
}

.singer-genre {
    margin: 0;
}

.list ul {
    list-style-type: none;
}

.list a {
  text-decoration: none;
  color: #4a314d;
}

.list a:hover {
  color: #d6ac57;
}

</style>

