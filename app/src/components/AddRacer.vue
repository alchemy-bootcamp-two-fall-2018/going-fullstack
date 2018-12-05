<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="racer.name" require>
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
                name: ''
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
