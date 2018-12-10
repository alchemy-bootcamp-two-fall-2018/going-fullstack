<template>
    <div v-if="grappler">
        <h2> Name: {{grappler.name}}</h2>
        <h3> Age:{{grappler.age}}</h3>
        <h3>Championship Status: {{grappler.champ}}</h3>
        <h3>Preference: {{grappler.pref_id}}</h3>
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
            api.deleteGrappler(this.grappler.id);
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
    background: linear-gradient(307deg, #52f2c8, #5287f2);
background-size: 400% 400%;

-webkit-animation: AnimationName 0s ease infinite;
-moz-animation: AnimationName 0s ease infinite;
animation: AnimationName 0s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:0% 18%}
    50%{background-position:100% 83%}
    100%{background-position:0% 18%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 18%}
    50%{background-position:100% 83%}
    100%{background-position:0% 18%}
}
@keyframes AnimationName { 
    0%{background-position:0% 18%}
    50%{background-position:100% 83%}
    100%{background-position:0% 18%}
}
}

</style>
