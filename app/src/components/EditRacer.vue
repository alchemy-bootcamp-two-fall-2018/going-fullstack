<template>
    <section>
        <button @click="show = !show"> ✎ Edit</button>
        <RacerForm v-if="show" :onClose="() => show = false"
            :onSubmit="handleEdit"
            :racerToEdit="racer"
            :label="'Update'"/>
    </section>
</template>

<script>
import RacerForm from './RacerForm';

export default {
    props: {
        onEdit: Function,
        racer: Object
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
        handleEdit(racer) {
            return this.onEdit(racer)
                .then(() => this.show = false);
        }
    }
};
</script>

<style>

</style>
