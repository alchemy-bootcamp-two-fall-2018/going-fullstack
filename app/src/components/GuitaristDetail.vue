<template>
  <section v-if="guitarist">
    <h2>{{guitarist.name}}</h2>
    <p>
      {{guitarist.type}} musician
    </p>
    <p>
      Year of birth: {{guitarist.yob}}
    </p>
    <p>
      Guitar brand: {{guitarist.brand}}
    </p>
    <button @click="handleDelete" class="delete">Delete</button>
  </section>
</template>

<script>
import api from '../services/api';
export default {
  data() {
    return {
      guitarist: null
    };
  },
  created() {
    api.getGuitarist(this.$route.params.id)
      .then(guitarist => {
        this.guitarist = guitarist;
      });
  },
  methods: {
    handleDelete() {
      api.deleteGuitarist(this.guitarist.id)
        .then(() => {
          this.$router.push('/guitarists');
        });
    }
  }
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h2, p {
  text-align: center;
}
.delete {
  background-color: red;

}
</style>
