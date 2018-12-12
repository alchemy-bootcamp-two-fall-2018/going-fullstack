<template>
    <section v-if="racer">
        <div>
            <EditRacer
                :racer="racer"
                :onEdit="handleEdit"
                />
        </div>
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
        <button @click="handleDelete">Delete Racer</button>
    </section>
</template>

<script>
import api from '../services/api';
import EditRacer from './EditRacer';
export default {
    data() {
        return {
            racer: null
        };
    },
    components: {
        EditRacer
    },
    created() {
        api.getRacer(this.$route.params.id)
            .then(racer => {
                console.log('racer', racer);
                this.racer = racer;
            });
    },
    methods: {
        handleEdit(racer) {
            return api.updateRacer(racer)
                .then(updated => {
                    this.racer = updated;
                    this.$router.push('/racers');
                });
        },
        handleDelete() {
            api.deleteRacer(this.racer.id)
                .then(() => {
                    this.$router.push('/racers');
                });
        }
    }
};
</script>

<style>

</style>
