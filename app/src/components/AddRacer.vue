<template>
    <form @submit.prevent="onAdd(racer)">
        <input v-model="name" required>
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
            student: {
                name: ''
            }
        };
    }
};
</script>

<style>

</style>
