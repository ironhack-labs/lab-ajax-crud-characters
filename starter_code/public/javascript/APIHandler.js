'use strict';

class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    getFullList() {
        axios
            .get(`${this.BASE_URL}/characters/`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }

    getOneRegister(charId) {
        axios
            .get(`${this.BASE_URL}/characters/${charId}`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));

    }

    createOneRegister(characterInfo) {


        axios
            .post(`http://ih-crud-api.herokuapp.com/characters/`, characterInfo)
            .then(response => console.log(response.data + 'created'))
            .catch(error => console.log(error.data));

    }

    updateOneRegister(charId, updateInfo) {
        console.log(charId);
        axios
            .patch(`http://ih-crud-api.herokuapp.com/characters/${charId}`, updateInfo)
            .then(response => console.log(response.data + 'updated'))
            .catch(error => console.log(error.data));



    }

    deleteOneRegister(charId) {

        axios
            .delete(`${this.BASE_URL}/characters/${charId}`)
            .then(response => console.log('deleted'));

    }
}
