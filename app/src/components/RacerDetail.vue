<template>
    <section v-if="racer">
        <h2>{{racer.name}}</h2>
        <p>
            Age:{{racer.age}}
        </p>
        <p>
            Team:{{racer.team}}
        </p>
        <p>
            PR:{{racer.pr}}
        </p>
    </section>
</template>

<script>
import api from '../services/api';
export default {
    data() {
        return {
            racer: null
        };
    },
    created() {
        api.getRacer(this.$route.params.id)
            .then(racer => {
                console.log('racer', racer);
                this.racer = racer;
            });
    }
};
</script>

<style>

</style>
