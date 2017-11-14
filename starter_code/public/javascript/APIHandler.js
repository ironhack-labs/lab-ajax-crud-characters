'use strict';

class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = 'https://ih-crud-api.herokuapp.com/characters';
    }

    getFullList() {
        axios
            .get(this.BASE_URL)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }

    getOneRegister(registerId) {
        axios
            .get(`${this.BASE_URL}/${registerId}`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }

    createOneRegister(characterInfo) {
        axios
            .post(this.BASE_URL, characterInfo)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }

    updateOneRegister(registerId, updateInfo) {
        axios
            .patch(`${this.BASE_URL}/${registerId}`, updateInfo)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }

    deleteOneRegister(registerId) {
        axios
            .delete(`${this.BASE_URL}/${registerId}`)
            .catch(error => console.log(error));
    }
}
