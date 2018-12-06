<template>
    <form @submit.prevent="handleSubmit">
        <p>
            <label>Name</label>
            <input v-model="racer.name" required>
        </p>
         <p>
            <label>Age</label>
            <input v-model="racer.age" required>
        </p>
        <p>
            <label>Gender</label>
            <input v-model="racer.gender" required>
        </p>
        <p>
            <label>Varsity</label>
            <input v-model="racer.varsity" required>
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
