<template>
    <section v-if="character">
        <h1>{{character.name}}</h1>
        <ul>
            <li>House: {{character.house}}</li>
            <li>HouseId: {{character.housesId}}</li>
            <li>Age: {{character.age}}</li>
            <li>Alive? {{character.alive}}</li>
        </ul>
        <button @click="handleDelete">Delete</button>
        <EditCharacter
            :character="character"
            :onEdit="handleEdit" />
    </section>
</template>

<script>
import api from '../services/api.js';
import EditCharacter from './EditCharacter';
export default {
    components: {
        EditCharacter
    },
    data() {
        return {
            character: null
        };
    },
    methods: {
        handleDelete() {
            api.deleteCharacter(this.character.id)
                .then(() =>
                    this.$router.push('/characters'));
        },
        handleEdit(character) {
            return api.updateCharacter(character, this.$route.params.id)
                .then(updated => this.character = updated);
        }
    },
    created() {
        api.getCharacter(this.$route.params.id)
            .then(character => {
                this.character = character;
            });
    }
};
</script>

<style>
li {
    list-style: none;
}
</style>
