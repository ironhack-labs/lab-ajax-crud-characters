'use strict';

class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    getFullList() {
        axios
            .get(`${this.BASE_URL}/characters`);
    }

    getOneRegister() {

        const charId = 3;
        axios
            .get(`${this.BASE_URL}/characters/${charId}`);
    }

    createOneRegister() {
        const characterInfo = {
            name: 'eloithegoodboy',
            occupation: 'peacefully smashing screens right now',
            weapon: 'kame hame'
        };

        const charId = 2;

        axios
            .post(`${this.BASE_URL}/characters/${charId}`, characterInfo);
    }

    updateOneRegister() {
        const updateInfo = {
            name: document.getElementById('update-name-input').value,
            occupation: document.getElementById('update-occupation-input').value,
            weapon: document.getElementById('update-weapon-input').value
        };

        const charId = 3;

        axios
            .patch(`${this.BASE_URL}/characters/${charId}`, updateInfo);


    }

    deleteOneRegister() {
        const charId = 3;
        axios
            .delete(`${this.BASE_URL}/characters/${charId}`);
    }
}
