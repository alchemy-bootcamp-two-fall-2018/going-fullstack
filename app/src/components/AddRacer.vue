<template>
    <form @submit.prevent="handleSubmit">
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
            <select v-model="racer.team" required>
                <option value="varsity">Varsity</option>
                <option value="juniorVarsity">Junior Varsity</option>
            </select>
        </p>
        <p>
            <label>PR</label>
            <input v-model="racer.pr" required>
        </p>
        <button> Add </button>
    </form>
</template>

<script>


export default {
    props: {
        onAdd: Function
    },
    data() {
        return {
            racer: {
                name: '',
                age: '',
                gender: '',
                varsity: '',
                pr: ''
            }
        };
    },
   
    
    methods: {
        handleSubmit() {
            this.onAdd(this.racer)
                .then(() => {
                    this.racer = { name: '' };
                });
        }

    }
};
</script>

<style>

</style>
