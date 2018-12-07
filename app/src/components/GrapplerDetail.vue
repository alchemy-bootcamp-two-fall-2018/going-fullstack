<template>
    <div v-if="grappler">
        <h2> Name: {{grappler.name}}</h2>
        <h3> Age:{{grappler.age}}</h3>
        <h3>Championship Status: {{grappler.champ}}</h3>
        <h3>Preference: {{grappler.pref_id}}</h3>
        <button @click="handleDelete">DELETE {{grappler.name}} </button>

        <form @submit.prevent="handleUpdate">
            <h1> Update {{this.grappler.name}} Information Here
            </h1>
            <label> Name:</label>
            <input v-model="this.grappler.name" required>
            <label> Preference(must be 1/2):</label>
            <input v-model="this.grappler.prefId" required>
            <label> Age:</label>
            <input v-model="this.grappler.age" type ="number" required>
            <label> WorldChampion? Yes/No</label>
            <input v-model="this.grappler.champ" type="checkbox" name="champion" id="champ" value="true">
            <button>Update</button>
        </form>
    </div>
</template>

<script>
function copyStudent(grappler){
    return {
        name: grappler.name,
        age: grappler.age, 
        prefId: grappler.prefId,
        champ: grappler.champ
    };
}
import api from '../services/api';
export default {
    data() {
        return {
            grappler: null
        };
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

        handleUpdate() {
            api.updateGrappler(this.grappler.id);
            console.log('button fires update method onclick');
            // api.updateGrappler(this.grappler);
        }
    }

};
</script>

<style>

</style>
