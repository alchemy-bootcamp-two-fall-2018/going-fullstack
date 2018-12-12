<template>
    <form @submit.prevent="onSubmit(racer)">
        <p>
            <label>Name</label>
            <input v-model="racer.name" required>
        </p>
         <p>
            <label>Age</label>
            <input type="number" v-model="racer.age" required>
        </p>
        <p>
            <label>Team</label>
            <select v-model="racer.teamId" required>
                <option value="1">Varsity</option>
                <option value="2">Junior Varsity</option>
            </select>
        </p>
        <p>
            <label>PR</label>
            <input v-model="racer.pr" required>
        </p>
        <button> {{label || 'Add'}} </button>
</template>

<script>
import api from '../services/api';

function initRacer() {
    return {
        racer: {
            name: '',
            age: '',
            teamId: '',
            pr: ''
        }
    };
}
function copyRacer(racer) {
    return {
        id: racer.id,
        name: racer.name,
        age: racer.age,
        teamId: racer.team,
        pr: racer.pr
    };
}

export default {
    props: {
        onSubmit: Function,
        racerToEdit: Object
    
    },
    data() {
        return {
            racer: this.racerToEdit
                ? copyRacer(this.racerToEdit)
                : initRacer(),
            racers: null
        };
    },
    created() {
        api.getRacers()
            .then(racers => {
                this.racers = racers;
            });
    }
};
</script>

<style>

</style>
