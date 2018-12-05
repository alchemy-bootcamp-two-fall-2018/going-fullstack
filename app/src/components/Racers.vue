<template>
    <section>
        Racers Section
        <li v-for="racer in racers"
            :key="racer.name">
            {{racer.name}}
        </li>
    </section>
</template>
    
<script>
import api from '../services/api';
export default {
    data() {
        return {
            racers: null
        };
    },
    created() {
        api.getRacers()
            .then(racers => {
                console.log(racers);
                this.racers = racers;
            });
    }
};
</script>

<style>

</style>
