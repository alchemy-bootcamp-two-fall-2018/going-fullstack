let houses = null;

const getOptions = (method, data) => {
    return {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
};

export default {
    getCharacters() {
        return fetch('/api/characters')
            .then(response => response.json());
    },

    getCharacter(id) {
        return fetch(`/api/characters/${id}`)
            .then(response => response.json());
    },

    addCharacter(character) {
        return fetch('/api/characters', getOptions('POST', character))
            .then(response => response.json());
    },

    updateCharacter(character) {
        return fetch(`/api/characters/${character.id}`, getOptions('PUT', character))
            .then(response => response.json());
    },

    getHouses() {
        if(houses) {
            return Promise.resolve(houses);
        }
        else {
            return fetch('/api/houses')
                .then(response => response.json());
        }
    },
    
    deleteCharacter(id) {
        return fetch(`/api/characters/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json());
    }
};