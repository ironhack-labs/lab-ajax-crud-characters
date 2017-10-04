class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    getFullList() {
        return axios.get('https://ih-crud-api.herokuapp.com/characters').then(response => {
            return response.data;
            console.log(response.data);
        });
    }

    getOneRegister(id) {
        return axios.get('https://ih-crud-api.herokuapp.com/characters/' + id).then(response => {
            return response.data;
            console.log(response.data);
        });

    }

    createOneRegister(name, occupation, debt, weapon) {
        return axios
            .post('https://ih-crud-api.herokuapp.com/characters', {
                name: name,
                occupation: occupation,
                debt: debt,
                weapon: weapon
            })
            .then(response => response.data)
            .catch(error => {
                error;
            })
    }

    updateOneRegister(id, name, occupation, debt, weapon) {
        return axios
            .patch('https://ih-crud-api.herokuapp.com/characters/' + id, {
                name: name,
                occupation: occupation,
                debt: debt,
                weapon: weapon
            })
            .then(response => console.log(response.data))
            .catch(error => {
                error;
            })
    }

    deleteOneRegister(id) {
        return axios.delete('https://ih-crud-api.herokuapp.com/characters/' + id).then(response => {
            return response.data;
        });

    }
}