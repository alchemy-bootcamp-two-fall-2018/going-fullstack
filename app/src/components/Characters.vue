<template>
    <section>
        <h1>Characters</h1>
        <AddCharacter :onAdd="handleAdd" />
        <ul v-if="characters">
            <li v-for="character in characters" 
            :key="character.id">
                <RouterLink :to="`/characters/${character.id}`">
                    {{character.name}}
                </RouterLink>
            </li>
        </ul>
    </section>
</template>

<script>
import AddCharacter from './AddCharacter';
import api from '../services/api.js';
export default {
    data() {
        return {
            characters: null
        };
    },
    components: {
        AddCharacter
    },
    created() {
        api.getCharacters().then(characters => {
            this.characters = characters;
        }).catch(err => 
            console.log(err));
    },
    methods: {
        handleAdd(character) {
            return api.addCharacter(character).then(saved => {
                this.characters.push(saved);
            });
        }
    }
};
</script>

<style scoped>
ul {
	display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-column-gap: 10px;
    grid-row-gap: 60px;
    list-style: none;
	}
li :hover {
    background: rgba(170, 170, 170, 0.452);
    padding: 5px;
    font-size: 1.05em;
}
</style>
