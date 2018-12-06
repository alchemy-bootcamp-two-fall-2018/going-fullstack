<template>
    <section v-if="racer">
            This is the Detail 
    <h2>{{race.name}}</h2>
    <p>
        Age:{{racer.age}}
    </p>
     <p>
        Gender:{{racer.gender}}
    </p>
     <p>
        Age:{{racer.age}}
    </p>
     <p>
        Team:{{racer.varsity}}
    </p>
     <p>
        PR:{{racer.pr}}
    </p>
    </section>
</template>

<script>
import api from '../../services/api';
export default {
    data() {
        return {
            racer: null
        };
    },
    created() {
        api.getRacer(this.$route.params.id)
            .then(racer => {
                this.racer = racer;
            });
    }
};
</script>

<style>

</style>
