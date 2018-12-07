export default {
    getGrapplers() {
        return fetch('/api/data/grapplers')
            .then(response => response.json());
    },
    getGrappler(id) {
        return fetch(`/api/data/grapplers/${id}`)
            .then (response => response.json());
    },

    addGrappler(grappler) {
        return fetch('/api/data/grapplers', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(grappler)
        })
            .then(response => {
                console.log('response from api', response);
                return response.json();
            });
    }, 
    deleteGrappler(id){
        return fetch(`/api/data/grapplers/${id}`, {
            
            method: 'DELETE', 
        })
            .then(response => response.json());
    }
};