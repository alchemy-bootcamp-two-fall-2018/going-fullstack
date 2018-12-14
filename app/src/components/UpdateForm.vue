<template>
        <form @submit.prevent="handleSubmit">
            <h1> Update Information Here
            </h1>
            <label> Name:</label>
            <input v-model="grapplerToUpdate.name" required>
            <label> Preference(must be 1/2):</label>

            <select v-model="grapplerToUpdate.prefId">
                <option value="1">NO-GI</option>
                <option value="2">GI</option>
            </select>

            
            <label> Age:</label>
            <input v-model="grapplerToUpdate.age" type ="number" required>
            <label> WorldChampion? Yes/No</label>
            <input v-model="grapplerToUpdate.champ" type="checkbox" name="champion" id="champ" value="true">
            <button>Update</button>
        </form>
    
</template>

<script>
export default {
    data() {
        return {
            grapplerToUpdate: {
                id: this.grappler.id || '',
                name: this.grappler.name || '',
                age: this.grappler.age || '',
                prefId: this.grappler.prefId || '',
                champion: this.grappler.champion || false
            }
        };
    }, 
    props: {
        onUpdate: Function,
        grappler: Object
    },
    methods: {
        handleSubmit() {
            console.log('step 1 from update form', this.grapplerToUpdate);
            this.onUpdate(this.grapplerToUpdate); 
        }
    }

};
</script>

<style>

</style>
