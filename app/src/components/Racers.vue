<template>
    <section>
        Racers Section
        <AddRacer :onAdd="handleAdd"/>
        <ul v-if="racers">
            <li
                v-for="racer in racers"
                :key="racer.id">
                
                <RouterLink :to="`/racers/${racer.id}`"> 
                {{racer.name}}
                </RouterLink>
            </li>
        </ul>
    </section>
</template>
    
<script>
import api from '../services/api';
import AddRacer from './AddRacer';

export default {
    props: {
        racers: null
    },
    data() {
        return {
            racers: null,
            error: null
        };
    },
    components: {
        AddRacer
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
