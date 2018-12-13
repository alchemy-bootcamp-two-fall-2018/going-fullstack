<template>
    <CharacterForm 
        :onSubmit="handleEdit"
        :characterToEdit="character"
         />
</template>

<script>
import CharacterForm from './CharacterForm';
export default {
    props: {
        onEdit: Function,
        character: Object
    },
    components: {
        CharacterForm
    },
    methods: {
        handleEdit(character) {
            return this.onEdit(character);
        }
    }
};
</script>

<style>

</style>
