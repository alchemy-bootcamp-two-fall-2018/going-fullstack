<template>
    <CharacterForm 
        :onSubmit="handleEdit"
        :characterToEdit="character"
        label="Update"
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
            // console.log(character);
            return this.onEdit(character);
        }
    }
};
</script>
