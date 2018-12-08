<template>
    <section>
      <button @click="() => this.add = true"><h3>Add New Emoji:</h3></button>
      <form @submit.prevent="handleSubmit" v-show="add">
          <label>
              Name:
              <input v-model="emoji.name" required>
          </label>
          <label>
              Image URL:
              <input v-model="emoji.image" required>
          </label>
          <label>
              Year of Birth:
              <input placeholder="yyyy" v-model="emoji.yob" required>
          </label>
          <label>
              Goodness:
              <input placeholder="true/false" v-model="emoji.goodness" required>
          </label>
          <button>Add</button>
      </form>
    </section>
</template>

<script>
export default {
  data() {
    return {
      emoji: {},
      add: false
    };
  },
  props: {
    onAdd: Function
  },
  methods: {
    handleSubmit() {
      this.add = false;
      this.onAdd(this.emoji)
        .then(() => {
          this.emoji = {};
        });
    }
  }
};
</script>

<style>

label {
  display: block;
  margin: 1%;
}

input, select {
  width: 150px;
  font-size: 1.05em;
}

</style>
