<template>
    <form @submit.prevent="onSubmit(character)">
        <label>Name: 
            <input v-model="character.name" required>
        </label>
        <label>House: 
            <select v-if="houses"
                v-model="character.housesId">
                <option value="" disabled>Select a house!</option>
                <option v-for="house in houses"
                    :key="house.id" 
                    :value="house.id" required>
                    {{house.name}}   
                </option>
            </select>
        </label>
        <label>Alive: 
            <select v-model="character.alive">
                <option value="true">Yes!</option>
                <option value="false">No!</option>
            </select>
        </label>
       <label>Age:
            <input type="number" v-model="character.age" required>
        </label>
        <button>Submit</button>
    </form>
</template>

<script>
function initCharacter() {
    return {
        name: '',
        housesId: '',
        alive: '',
        age: null,
    };
}

function copyCharacter(character) {
    return {
        id: character.id,
        name: character.name,
        house: character.housesId,
        alive: character.alive,
        age: character.age
    };
}
import api from '../services/api.js';

export default {
    props: {
        onSubmit: Function,
        characterToEdit: Object
    },
    data() {
        return {
            character: this.characterToEdit
                ? copyCharacter(this.characterToEdit)
                : initCharacter(),
            houses: null
        };
    },
    created() {
        api.getHouses()
            .then(houses => {
                this.houses = houses;
            });
    }
};
</script>

<style>
form {
    display: flex;
    padding: 20px;
    flex-direction: column;
    width: 25vw;
    margin: auto;
    border: 1px solid gray;
}
button {
    width: 50px;
    margin: auto;
}
input {
    width: 15vw;
}
label {
    padding: 5px;
}

</style>
