<template>
    <section>
        Racers Section
        <AddRacer onAdd="handleAdd"/>
        <ul>
            <li v-for="racer in racers"
                :key="racer.name">
                {{racer.name}}
            </li>
        </ul>
    </section>
</template>
    
<script>
import api from '../services/api';
import AddRacer from './AddRacer';

export default {
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
                console.log(racers);
                this.racers = racers;
            })
            .catch(err => {
                this.error = err;
            });
    },
    methods: {
        handleAdd(racer) {
            
        }
    }
};
</script>

<style>

</style>
