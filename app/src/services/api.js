export default {
    getRacers() {
        return fetch('/api/racers')
            .then(response => response.json());
    },
    getRacer(id) {
        return fetch(`/api/racers/${id}`)
            .then(response => response.json());
    },
    addRacer(racer) {
        return fetch('/api/racers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(racer)
        })
            .then(response => response.json());
    },
    getTeams() {
        return fetch ('/api/teams')
            .then(response => response.json());
    },
    upDateRacer(racer) {
        return fetch(`/api/racers/${racer.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(racer)
        })
            .then(response => response.json()); 
    }
};