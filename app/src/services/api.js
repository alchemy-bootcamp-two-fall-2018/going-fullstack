export default {
    getRacers() {
        return fetch('/api/racers')
            .then(response => response.json());

    }

};