<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label> Name:</label>
            <input v-model="grappler.name" required>

            <label> Preference(must be 1/2):</label>
            <select v-model="grappler.prefId">
                <option value="1">NO-GI</option>
                <option value="2">GI</option>
            </select>



            <label> Age:</label>
            <input v-model="grappler.age" type ="number" required>
            <label> WorldChampion? Yes/No</label>
            <input v-model="grappler.champ" type="checkbox" name="champion" id="champ" value="true">
            <button>Add</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            grappler: {
                name: '',
                age: '',
                prefId: '',
                champion: Boolean
            }
        };
    }, 
    props: {
        onAdd: Function
    },
    methods: {
        handleSubmit() {
            this.onAdd(this.grappler) 
                .then(() => {
                    this.grappler = { name: '', age: '', prefId: '', champion:'' };
                });
        }
    }
};
</script>

<style>

</style>
