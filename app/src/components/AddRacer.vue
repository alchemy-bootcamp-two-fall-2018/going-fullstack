<template>
    <section>
        <button @click="show = true"> Add a New Racer</button>
        <RacerForm v-if="show"
            :onClose="() => show = false"
            :onSubmit="handleAdd"/>
    </section>
</template>

<script>
import RacerForm from './RacerForm';

export default {
    props: {
        onAdd: Function,
        onClose: Function

    },
    data() {
        return {
            show: false
        };
    },
    components: {
        RacerForm
    },
    methods: {
        handleAdd(racer) {
            return this.onAdd(racer)
                .then(() => this.show = false);
        }
    }
};
</script>

<style>

</style>
