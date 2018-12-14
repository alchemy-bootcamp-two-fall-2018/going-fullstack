<template>
    <CharacterForm :onSubmit="handleAdd" />
</template>

<script>

import CharacterForm from './CharacterForm.vue';
export default {
    props: {
        onAdd: Function
    },
    components: {
        CharacterForm
    },
    methods: {
        handleAdd(character) {
            return this.onAdd(character);
        }
    }
};
</script>

