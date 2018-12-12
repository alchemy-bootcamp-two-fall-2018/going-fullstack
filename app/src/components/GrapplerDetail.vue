<template>
    <div v-if="grappler">
        <h2> Name: {{grappler.name}}</h2>
        <h3> Age:{{grappler.age}}</h3>
        <h3>Championship Status: {{grappler.champ}}</h3>
        <h3>Preference: {{grappler.prefId}}</h3>


        <button @click="handleDelete">DELETE {{grappler.name}} </button>

        <UpdateForm :onUpdate="handleUpdate"
        :grappler="grappler"
        />
    </div>
</template>

<script>

import api from '../services/api';
import UpdateForm from './UpdateForm.vue';
export default {
    data() {
        return {
            grappler: null
        };
    }, 
    components: {
        UpdateForm
    },
    created() {
        api.getGrappler(this.$route.params.id)
            .then(grappler => {
                console.log('banana', grappler);
                this.grappler = grappler;
            });
    },
    methods: {
        handleDelete() {
            api.deleteGrappler(this.grappler.id)
                .then(() => {
                    this.$router.push('/grapplers');
                });
        }, 

        handleUpdate(grappler) {
            console.log('button fires update method onclick', grappler);
            api.updateGrappler(grappler)
                .then(updated => {
                    this.grappler = updated;
                });
        }
    }
};
</script>

<style>
body {
  background-image: linear-gradient(to right bottom, #06d4f6, #00b7ff, #0095ff, #006aff, #6612eb);

}

</style>
