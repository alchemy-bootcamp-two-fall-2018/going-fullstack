<template>
        <form @submit.prevent="handleSubmit">
            <h1> Update Information Here
            </h1>
            <label> Name:</label>
            <input v-model="grapplerToUpdate.name" required>
            <label> Preference(must be 1/2):</label>
            <input v-model="grapplerToUpdate.prefId" required>
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
            // .then(() => {
            //     this.grappler = { name: '', age: '', prefId: '', champion:'' };
            // });
        }
    }

};
</script>

<style>

</style>
