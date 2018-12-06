<template>
    <section>
        Racers Section
        <AddRacer :onAdd="handleAdd"/>
        <RacerList :racers="racers"/>
    </section>
</template>
    
<script>
import api from '../services/api';
import AddRacer from './AddRacer';
import RacerList from './RacerList';

export default {
    data() {
        return {
            racers: null,
            error: null
        };
    },
    components: {
        AddRacer,
        RacerList
    },
    created() {
        api.getRacers()
            .then(racers => {
                this.racers = racers;
            })
            .catch(err => {
                this.error = err;
            });
    },
    methods: {
        handleAdd(racer) {
            return api.addRacer(racer)
                .then(saved => {
                    this.racers.push(saved);
                });
        }
    }   
};
</script>

<style>

</style>
